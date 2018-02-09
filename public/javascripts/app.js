

  // Ajax call to Save article 
  $(".savez").click(function() {
    console.log("Saving");
   
    var thisId = $(this).attr("data-id");
  
    // Now make an ajax call for the Article
    $.ajax({
      method: "POST",
      url: "/add/" + thisId
    })
      .then(function(data) {
      });
  });


//Scrape Button and update modal
$("#scraper").click(function() {
  $.ajax({
    method: "GET",
    url: "/scraper",
    
  }) .then(function(data) {
    // Log the response
    console.log(data);
    // Empty the notes section
    $(".modal-body").text("Scraped");
    
   
  });

});


