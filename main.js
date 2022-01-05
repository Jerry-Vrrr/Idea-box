// var msg = require('./Idea.js');
// var idea = new Idea();
// var currentIdeas = []

var star = document.querySelector('.star')
var starActive = document.querySelector('.star-active')
var ideaCardsSection = document.querySelector('.idea-cards-section')

var deleteButton = document.querySelector('.delete')
var deleteButtonActive = document.querySelector('.delete-active')
var ideaCard = document.querySelector('.idea-card')

// var activeDelete= document.querySelector(.'delete-active');
// var commentPlus = document.querySelector(.'comment-plus');
//
// var ideaTitle = document.querySelector(.'idea-card-title');
// var ideaBody = document.querySelector(.'idea-card-body');
// var searchIdea = document.querySelector(.'search-ideas-bar');
//

// star.addEventListener('')
// activeStar.addEventListener('')
ideaCardsSection.addEventListener('click', cardSwitch)

function cardSwitch() {
  if (event.target.className === 'star') {
    star.classList.add('hidden')
    starActive.classList.remove('hidden')
  }
  if (event.target.className === 'delete') {
    deleteButton.classList.add('hidden')
    deleteButtonActive.classList.remove('hidden')
    ideaCard.classList.add('hidden')
  }
}
