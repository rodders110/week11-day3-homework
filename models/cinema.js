const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film) {
    return film.title;
  })
};

Cinema.prototype.filmByTitle = function (title) {

  let result = this.films.find(function(film){
    return film.title === title;
  })
  return result;
};

Cinema.prototype.filterByGenre = function(genre){
  let result = this.films.filter(film => film.genre === genre);
  return result;
};

module.exports = Cinema;
