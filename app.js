// Import Express
const express = require('express')
const app = express()

const port = process.env.PORT || 4000;

// Require Firebase
const firebase = require("firebase");

// Get config so we can communicate with Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRBxZvPJaI1Zzy9UeSbqUDYQO8j0xf_j0",
  authDomain: "exercise-four-b02d1.firebaseapp.com",
  databaseURL: "https://exercise-four-b02d1.firebaseio.com",
  projectId: "exercise-four-b02d1",
  storageBucket: "exercise-four-b02d1.appspot.com",
  messagingSenderId: "570213342156",
  appId: "1:570213342156:web:b1038f696e7d9e28e75b69",
  measurementId: "G-PR9KRRXDYG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/posts.js");
const createRoute = require("./routes/createArticle.js");

// Create routes
app.use('/', indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

// Set up app so that it runs when this file is run
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)
);
