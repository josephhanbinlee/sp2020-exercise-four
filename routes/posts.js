const express = require("express");
const router = express.Router();
// Require Firebase
const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore()
// Reference to collection
const blogposts = db.collection("blogposts");

// Get single blog post 
router.get("/", (req, res) => res.send("Please Include"));
router.get("/:id", (req, res) => {
    const queryId = req.params.id;
    blogposts
        .doc(queryId)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                return res.send(doc.data());
            } else {
                return res.send("No such document");
            }
        })
        .catch(function(error) {
            console.log('Error:', error);
            return res.send(error);
        });
    });

module.exports = router;