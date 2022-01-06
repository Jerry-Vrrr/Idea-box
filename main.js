// var msg = require('./Idea.js');
// var idea = new Idea();
// var currentIdeas = []

/* ~~~~~ 👇🏼 Query Selectors Go Here 👇🏼 ~~~~~ */

//Star Buttons
var star = document.querySelector('.star');
var starActive = document.querySelector('.star-active');
var ideaCardsSection = document.querySelector('.idea-cards-section');

//Delete Buttons
var deleteButton = document.querySelector('.delete');
var deleteButtonActive = document.querySelector('.delete-active');
var ideaCard = document.querySelector('.idea-card');
var commentPlus = document.querySelector('.comment-plus');

//Top Section
var ideaTitle = document.querySelector('.idea-card-title');
var ideaBody = document.querySelector('idea-card-body');
var searchIdea = document.querySelector('.search-ideas-bar');
var saveButton = document.querySelector('.save-button');

//Left section
var showStarredIdeasButton = document.querySelector('.show-starred-ideas-button');

/* ~~~~~ 👇🏼 Event Listeners Go Here 👇🏼 ~~~~~ */


ideaCardsSection.addEventListener('click', cardSwitch)


/* ~~~~~ 👇🏼 Functions Go Here 👇🏼 ~~~~~ */

function cardSwitch() {
  if (event.target.className === 'star') {
      hide(star)
      show(starActive)
  }
  if (event.target.className === 'delete') {
    hide(deleteButton)
    show(deleteButtonActive)
    hide(ideaCard)
  }
}
function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}
