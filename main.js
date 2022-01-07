
var currentIdeas = []

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
var ideaBody = document.querySelector('.idea-card-body');
var searchIdea = document.querySelector('.search-ideas-bar');
var saveButton = document.querySelector('.save-button');

var titleForm = document.querySelector('.title-form');
var bodyForm = document.querySelector('.body-form');
//Left section
var showStarredIdeasButton = document.querySelector('.show-starred-ideas-button');

/* ~~~~~ 👇🏼 Event Listeners Go Here 👇🏼 ~~~~~ */
// star.addEventListener('click', cardSwitch)

ideaCardsSection.addEventListener('click', cardSwitch)
saveButton.addEventListener('click', saveCard)
titleForm.addEventListener('input', enableSaveButton)
bodyForm.addEventListener('input', enableSaveButton)

/* ~~~~~ 👇🏼 Functions Go Here 👇🏼 ~~~~~ */

function saveCard () {
  event.preventDefault()

  var idea = new Idea(titleForm.value,bodyForm.value);
  currentIdeas.push(idea)

  titleForm.value = ''
  bodyForm.value = ''
  saveButton.classList.add('disabled')

  ideaCardsSection.innerHTML = "";
  for (var i = 0; i < currentIdeas.length; i ++) {
    ideaCardsSection.innerHTML += `
    <section class="idea-cards-section">
      <div class="idea-card">
        <header class="card-header">
          <img class="star" src="assets/star.svg" id="${currentIdeas[i].id}" />
          <img class="star-active hidden" src="assets/star-active.svg" id="${currentIdeas[i].id}" />
          <img class="delete" src="assets/delete.svg" id="${currentIdeas[i].id}" />
          <img class="delete-active hidden" src="assets/delete-active.svg" id="${currentIdeas[i].id}" />
        </header>
        <h1 class="idea-card-title">${currentIdeas[i].title}</h1>
        <h5 class="idea-card-body">${currentIdeas[i].body}</h5>
        <footer class='card-footer'>
          <img class="comment-plus" src="assets/comment.svg" />
          <label class="comment">Comment</label>
        </footer>
      </div>
    </section>`
  }
}


function enableSaveButton() {
  if (titleForm.value && bodyForm.value)
    saveButton.classList.remove('disabled')
  }

function cardSwitch() {
  var ideaCardsSection = document.querySelector('.idea-cards-section');
  var star = document.querySelector('.star');
  var starActive = document.querySelector('.star-active');
  var deleteButton = document.querySelector('.delete');
  var deleteButtonActive = document.querySelector('.delete-active');

  if (event.target.className === 'star') {
    hide(star)
    show(starActive)
  }
  if (event.target.className === 'delete') {
    hide(deleteButton)
    show(deleteButtonActive)
    hide(ideaCardsSection)
  }

/* ~~~~~ 👇🏼 Hide/Show Functions Go Here 👇🏼 ~~~~~ */
// var hidden = 'hidden'
}
function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}
