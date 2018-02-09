var express = require('express');
var router = express.Router();
var db = require("../models");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// Route for getting all Articles from the db
router.get("/", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({
      saved:false
    })
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        // res.json(dbArticle);
        res.render("index",{
          title: 'Express',
          dbArticle:dbArticle
        })
        // console.log(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  // Route for getting all Articles from the db
router.post("/add/:id", function(req, res) {
  // Grab every document in the Articles collection
  db.Article.update({
    _id:req.params.id
  },{$set:{saved:true}})
    .then(function(dbArticle) {
      console.log("Saved");
      })
      
        .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



module.exports = router;
