function Quote(config){
  this.config = config;
}

Quote.prototype.save = function() {
   var quoteListRef = new Firebase('https://quotemedad.firebaseIO.com/quotes');

  quoteListRef.push(this.config);
};
