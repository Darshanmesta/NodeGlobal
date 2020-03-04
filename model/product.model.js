// db schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declaring collection schema

let Product = new Schema(
  {
    // schema design of each field
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    info: { type: String },
    company: { type: String }
  },
  {
    // collection string
    collection: 'products'
  }
  
);

module.exports = mongoose.model('Product', Product);