# washWave project

## About project

It is a Backend project developed for car service company . Any user can login by email an role. role are 'user' or 'admin' user can access user route create booking, my-booking get all service and get a single service also admin can access create service , update service, delete service, get all booking etc

In this porject use zod validation system . All document will save in mongodb. mantain router controler service structure .

Basically It is a Car Washing System project. The main focus of this project is to implement Error Handling, CRUD operations, Authentication & Authorization, Transaction & Rollback

## **Technology Stack:**

- Use TypeScript as the programming language.
- Use Express.js as the web framework.
- Use Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB

## install my project

git clone [myporject link]

```bash
npm install
```

make a .env file and set a PORT=5000 and DB_URL= [your mongo url]

```bash
npm run start:dev
```

use this command for run prodcution

```bash
npm run start:prod
```

use this commant for run devlopment

you can install postman for test api

## project setup

if you want to make a project like this project -npm init -y -npm install express -npm install doenv -npm install cors -npm install mongoose --save -npm install typescript --save-dev -after this follow this link https://blog.logrocket.com/linting-typescript-eslint-prettier

### Project fetures

1. user login system
2. Authentication and Authorization
3. data retrive single and multiple
4. user data retrive
5. data delete and update system
6. zod Validation
7. error handle
8. pre and post hook implement
9. static implement
