<h1 align="center">
Foodiz
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> Foodiz is a Food delivery Application which i developed using  MERN stack . This website has functionality like ADD TO CART,LOGIN SIGNUP PAGE ,FORGOT PASSWORD, Food search 
build REST API for performing for managing
CRUD operations.
>



Used React as a front-end framework and Nodejs
, Express in backend, MongoDB for Database, for
state management REDUX.


added functionality like user authentication by
JWT authorization and using access token to
perform CRUD operations.

used bcryptjs for hashing password and
Mongoose ORM for managing MongoDB databases.


-used NODEMAILER for sending email for reset password



## clone or download
```terminal
$ git clone https://github.com/gk45464/Foodiz.git
$ yarn # or npm i
```



# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd Foodiz          // go to Foodiz folder
$   npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd backend
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

### Start

```terminal
$ cd backend   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```


