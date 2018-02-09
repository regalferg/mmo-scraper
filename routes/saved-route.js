
var express = require('express');
var router = express.Router();
var db = require("../models");


// Route for getting all Articles from the db
router.get("/", function(req, res,) {
  console.log("Loaded");
    // Grab every document in the Articles collection
    db.Article.find({
      saved:true
    })
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        // res.json(dbArticle);
        res.render("saved",{
          dbArticle:dbArticle
        })
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
 
    // Route for getting all Articles from the db
router.post("/remove/:id", function(req, res) {
  console.log("Nothing");
  // Grab every document in the Articles collection
  db.Article.update({
    _id:req.params.id
  },{$set:{saved:false}})
    .then(function(dbArticle) {
      console.log("Saved");
      })
      
        .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});
  


  module.exports = router;