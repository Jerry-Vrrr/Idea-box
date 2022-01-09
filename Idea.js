class Idea {
  constructor(title,body) {
    this.title = title;
    this.body = body;
    // this.comment = ;
    this.starred = false;
    this.id = Date.now()
  }

  updateIdea(idea){
    idea.starred = true
  }
}
