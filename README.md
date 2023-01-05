# ⚡️ CoraToken-BackEnd
# 📗 Table of contents
1. [What is this](#-what-is-this)
2. [Features](#%EF%B8%8F-features)
3. [How to install](#%EF%B8%8F-how-to-install)
4. [How to use](#%EF%B8%8F-how-to-use)
4. [Improvements Ideas](#-improvements-ideas)


## ⚡️ What is this
- This is the backend of Monster Capital App
- This is currently not working, the app is not using any of the services here, we are using only smart contracts
- It uses Firebase for storing the users and news
- It is written in typescript, uses node and a simple express server implementation
- [Here](https://github.com/RolandoDrRobot/MonsterCapital-FrontEnd) you can see how the looks the app
- [Here](https://github.com/RolandoDrRobot/MonsterCapital-Contracts) are the smart contracts for this project
- It works as an API service and cover the following services for the app 👇

## ⚡️ Features
- Create users
- Login
- Offer news (the news needs to be stored in the database already)

## ⚙️ How to install
- Clone this repo: `git clone https://github.dev/RolandoDrRobot/CoraToken-BackEnd`
- Go to `my-app` and `npm install`
- Run `npm run dev`
- Right now only works on localhost, still planning the meaning of this project
- When you start the server, It will be availble on port 443, so, the APIs links will be preceeded by `localhost:443`

## ⚙️ How to use
- Create user: endpoint `/createUser` pass as arguments `(email, password, name)`
- Login: endpoint `/login` pass as arguments `(email, password, name)`
- News: endpoint `/news` It is a get request, no arguments needed


## 📗 Improvements Ideas
- Still looking useful case for this code