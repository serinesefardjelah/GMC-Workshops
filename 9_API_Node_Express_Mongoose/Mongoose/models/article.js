// let mongoose = require("mongoose");

// // Article Schema
// let articleSchema = mongoose.Schema({
//   title: {
//     type: String,
//     default: "Node js tutorial",
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     validate: (value) => {
//       return validator.isEmail(value);
//     },
//   },
// });

// let Article = (module.exports = mongoose.model("Article", articleSchema));

//Tuesday session
const mongoose = require("mongoose");
const validator = require("validator");

// Timestamp plugin
const timestamp = function (schema) {
  // Add the two fields to the schema
  schema.add({
    createdAt: Date,
    updatedAt: Date,
  });

  // Create a pre-save hook
  schema.pre("save", function (next) {
    let now = Date.now();
    this.updatedAt = now;
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now;
    }
    // Call the next function in the pre-save chain
    next();
  });
};

// Article Schema
let articleSchema = mongoose.Schema({
  title: {
    type: String,
    default: "Default title",
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});

// Virtual property for full description
articleSchema.virtual("description").get(function () {
  return `${this.title} by ${this.author}`;
});

// Instance method to update body
articleSchema.methods.updateTitle = function (newTitle) {
  this.title = newTitle;
  return this.save();
};
// //declaring instance methods
// ourSchema.methods.name_of_the_method = function(){
//   //code here
// }

// Static method to find by author
articleSchema.statics.findByAuthor = function (author) {
  return this.find({ author });
};
//static method to get all articles
articleSchema.statics.getAllArticles = function () {
  return this.find();
  //Article.find()
};
// Pre-save hook
articleSchema.pre("save", function (next) {
  console.log("Pre-save hook triggered");
  next();
});

// Post-save hook
articleSchema.post("save", function (doc, next) {
  console.log("Post-save hook triggered");
  next();
});

// Applying the timestamp plugin to articleSchema
articleSchema.plugin(timestamp);

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;
