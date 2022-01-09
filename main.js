
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
//a button that feels for the star click and loads "your getThisThingOn" function

ideaCardsSection.addEventListener('click', favoriteIdea)
saveButton.addEventListener('click', saveCard)
titleForm.addEventListener('input', enableSaveButton)
bodyForm.addEventListener('input', enableSaveButton)

/* ~~~~~ 👇🏼 Functions Go Here 👇🏼 ~~~~~ */

function saveCard () {
    event.preventDefault()
    var idea = new Idea(titleForm.value, bodyForm.value);
    currentIdeas.unshift(idea)
    clearField()
    displayCard()
}

function clearField(){
    titleForm.value = ''
    bodyForm.value = ''
    saveButton.classList.add('disabled')
    ideaCardsSection.innerHTML = '';
}

function displayCard() {
  ideaCardsSection.innerHTML = ''
    for (var i = 0; i < currentIdeas.length; i ++) {
      if (!currentIdeas[i].starred) {
    ideaCardsSection.innerHTML += `
    <section class="idea-cards-section" id="${currentIdeas[i].id}">
      <div class="idea-card" id="${currentIdeas[i].id}">
        <header class="card-header" id="${currentIdeas[i].id}">
          <img class="star" src="assets/star.svg"/>
          <img class="delete" src="assets/delete.svg" />
          <img class="delete-active hidden" src="assets/delete-active.svg" />
        </header>
        <h1 class="idea-card-title">${currentIdeas[i].title}</h1>
        <h5 class="idea-card-body">${currentIdeas[i].body}</h5>
        <footer class='card-footer'>
          <img class="comment-plus" src="assets/comment.svg" />
          <label class="comment">Comment</label>
        </footer>
      </div>
    </section>`

    } else {

    ideaCardsSection.innerHTML += `
    <section class="idea-cards-section" id="${currentIdeas[i].id}">
      <div class="idea-card" id="${currentIdeas[i].id}">
        <header class="card-header""${currentIdeas[i].id}">
          <img class="star-active" src="assets/star-active.svg"  />
          <img class="delete" src="assets/delete.svg" />
          <img class="delete-active hidden" src="assets/delete-active.svg" />
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
}

function enableSaveButton() {
    if (titleForm.value && bodyForm.value){
    saveButton.classList.remove('disabled')
    }
}

function favoriteIdea(event) {
  for (var i = 0; i < currentIdeas.length; i++){
    if (event.target.parentElement.id == currentIdeas[i].id){
      console.log('banana')
          currentIdeas[i].updateIdea(currentIdeas[i])
    }
  }
  displayCard()
}

/* ~~~~~ 👇🏼 Hide/Show Functions Go Here 👇🏼 ~~~~~ */

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}
