class Idea {
  constructor(title,body) {
    this.title = title;
    this.body = body;
    this.starred = false;
    this.id = Date.now()
  }

  updateIdea(idea){
    // if the star is white then
    if (!idea.starred){
    idea.starred = true
  } else {
      idea.starred = false
    }
  }

}
