var currentIdeas = []

/* ~~~~~ 👇🏼 Query Selectors Go Here 👇🏼 ~~~~~ */

//Form Section
var ideaTitle = document.querySelector('.idea-card-title');
var ideaBody = document.querySelector('.idea-card-body');
var searchIdea = document.querySelector('.search-ideas-bar');
var saveButton = document.querySelector('.save-button');
var titleForm = document.querySelector('.title-form');
var bodyForm = document.querySelector('.body-form');

//Card Section
var ideaCardsSection = document.querySelector('.idea-cards-section');

/* ~~~~~ 👇🏼 Event Listeners Go Here 👇🏼 ~~~~~ */

ideaCardsSection.addEventListener('click', favoriteIdea)
ideaCardsSection.addEventListener('click', deleteIdea)
saveButton.addEventListener('click', saveCard)
titleForm.addEventListener('input', enableSaveButton)
bodyForm.addEventListener('input', enableSaveButton)

/* ~~~~~ 👇🏼 Functions Go Here 👇🏼 ~~~~~ */

function saveCard () {
  event.preventDefault()
  var idea = new Idea(titleForm.value, bodyForm.value);
  currentIdeas.push(idea)
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
        <header class="card-header" id="${currentIdeas[i].id}">
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

function favoriteIdea(event) {
  for (var i = 0; i < currentIdeas.length; i++) {
    if (event.target.parentElement.id == currentIdeas[i].id) {
      currentIdeas[i].updateIdea(currentIdeas[i])
    }
  }
  displayCard()
}

function deleteIdea(event) {
  for (var i = 0; i < currentIdeas.length; i++) {
    if (event.target.parentElement.id == currentIdeas[i].id) {
      currentIdeas.splice(i, 1);
    }
  }
  displayCard()
}

function enableSaveButton() {
  if (titleForm.value && bodyForm.value) {
    saveButton.classList.remove('disabled')
  }
}
