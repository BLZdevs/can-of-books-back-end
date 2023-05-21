'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  description: String,
  author: String,
  series: Boolean,
  status: String
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
