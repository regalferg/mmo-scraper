var mongoose = require("mongoose");

// Reference to the Schema constructor
var Schema = mongoose.Schema;

//  Schema constructor, create a new UserSchema object

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    index:{unique:true}
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  saved:{
    type: Boolean,
    default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
