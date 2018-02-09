
var express = require('express');
var router = express.Router();
var db = require("../models");


// Route for getting all Articles from the db
router.get("/", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({
      
    })
      .then(function(dbArticle) {
             res.json(dbArticle);
        res.render("index",{
          dbArticle:dbArticle
        })
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  


  
  // Route for grabbing a specific Article by id, populate it with it's note
  router.get("/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
          .populate("note")
      .then(function(dbArticle) {
              res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  // Route for saving/updating an Article's associated Note
  router.post("/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body)
      .then(function(dbNote) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      })
      .then(function(dbArticle) {
             res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  module.exports = router;