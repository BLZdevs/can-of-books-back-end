'use strict';

const Books = require('../Models/books');

const handleBooks = {};

handleBooks.getBooks = function (req, res,next){
  let queryObject = {email: req.user.email};
  if(req.query.title){
    queryObject = {title: req.query.title};
    console.log(queryObject);
  }

  Books.find(queryObject)
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(err => next(err));
};

handleBooks.postBooks = function (req,res,next){
  
  const data = req.body;

  Books.create({...data,email: req.user.email})
    .then(createdBook => res.status(201).send(createdBook))
    .catch(err => next(err));
};

handleBooks.deleteBooks = function (req,res, next){
  const {id} = req.params;
  Books.findByIdAndDelete(id)
    .then(deletedBook => res.status(204).send(deletedBook))
    .catch(err => next(err));
};

handleBooks.updateBooks = function (req, res, next) {
  const {id} = req.params;
  const data = req.body;
  Books.findByIdAndUpdate(id, {...data,email: req.user.email},{new:true,overwrite:true} )
    .then(updatedBooks => res.status(200).send(updatedBooks))
    .catch(err => next(err));
};


module.exports = handleBooks;
