require('dotenv').config();

const firebase = require('firebase-admin');
const firebaseAccount = require('./keys.json');

firebase.initializeApp({
 credential: firebase.credential.cert(firebaseAccount)
});

const database = firebase.firestore();

// Here we can validate If the collection users exists
const usersDatabase = database.collection('users'); 

const createUser = async (email: string, password: string, name: string, ethAddress: string) => {
  let createUserStatus = { status: 'no created' };
  try {
    const newUser = await usersDatabase.doc(email).get();
    if (!newUser.exists) {
        usersDatabase.doc(email).set({
          userEmail: email,
          userPassword: password,
          userName: name,
          userEthAddress: ethAddress,
        }); 
        createUserStatus.status = 'created';
    } else { createUserStatus.status = 'The user already exist!'; }
  }
  catch (e) { 
    createUserStatus.status = 'There was an error creating the user'; 
  }
  return createUserStatus;
}

const login = async (email: string, password: string) => {
  let loginStatus = { status: 'no logged' };
  try {
    const user = await usersDatabase.doc(email).get();
    user.exists && password === user._fieldsProto.userPassword.stringValue
    ? loginStatus.status = 'granted' 
    : loginStatus.status = 'The password or user does not match';
  } catch (e) {
    loginStatus.status = 'There was an error with the request: ' + e;
  }
  return loginStatus;
}

export { createUser, login };
