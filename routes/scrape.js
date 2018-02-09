var express = require('express');
var router = express.Router();
var app = require("../app")
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");


// A GET route for scraping the ycombinator website
router.get("/", function(req, res, next) {
  console.log("Test Scrape");

  axios.get("https://news.ycombinator.com/").then(function(response) {
    var $ = cheerio.load(response.data);

      $("td.title").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children()
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });


    res.send("Scrape Complete");
  });
});



module.exports = router;
