

class Idea {
  constructor(idea) {
    // I think all we need is the one parameter (if even) and everythin needs to be fed through dot notation.
    this.title = idea.title;
    this.body = idea.body;
    this.comment = idea.comment;
    this.starred =  || false;
    // before the || (or) statement link to keyword in function/listener.
    this.id = Date.now()
// Can we use Date.now() here, or do we need to put it in a function?
  }
}

// I think we need module.exports here. I think we might need the "required" line at the top of main.js also.
module.exports = Idea;




// I don't want to write anything in the main.js file, but these are some notes, etc. for that side.
//
// var msg = require('./Idea.js'); - to paste at the top of main.js
//
// var activeStar = document.querySelector(.'star-active');
// var activeDelete= document.querySelector(.'delete-active');
// var commentPlus = document.querySelector(.'comment-plus');

// var ideaTitle = document.querySelector(.'idea-card-title');
// var ideaBody = document.querySelector(.'idea-card-body');
// var = document.querySelector(.'');
