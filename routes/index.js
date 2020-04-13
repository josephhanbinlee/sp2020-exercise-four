const express = require("express");
const router = express.Router();
// Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore();

// Reference to Collection --> abstracting
const blogposts = db.collection('blogposts')

router.get("/", (req, res) => {
    const blogpostsArray = [];
    blogposts
        .get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Push document into array every time the query loops over existing articles
            blogpostsArray.push(doc.data());
        });
        return res.send(blogpostsArray);
    })
    .catch(function(error) {
        console.log('Error:', error);
        return res.send(error);
    });
});

module.exports = router;