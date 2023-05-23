'use strict';

const Books = require('../Models/books');

function getBooks(request, response){
  let queryObject = {};

  if(request.query.title){
    queryObject = {title: request.query.title};
    // console.log(queryObject);
  }

  Books.find(queryObject)
    .then(data => {
      console.log(data);
      response.status(200).send(data);
    })
    .catch(err => console.error(err));
}

module.exports = getBooks;
