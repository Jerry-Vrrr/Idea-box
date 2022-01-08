class Idea {
  constructor(title,body) {
    this.title = title;
    this.body = body;
    // this.comment = ;
    this.starred = false;
    this.id = Date.now()
  }

  // updateIdea() {
  //   if (event.target.className === 'star') {
  //     this.starred = true
  //     hide(star)
  //     show(starActive)
  //   }
  //   if (event.target.className === 'delete') {
  //     hide(deleteButton)
  //     show(deleteButtonActive)
  //     hide(ideaCardsSection)
  //   }
  //
  // }
}
