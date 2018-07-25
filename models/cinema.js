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
  let result = this.films.filter(function(film){
    return film.genre === genre;
  })
  return result;
};

Cinema.prototype.filterBy = function (property, value) {
  let result = this.films.some(function(film){
    return film[property] === value
  });
  return result;
};

Cinema.prototype.hasDuration = function (duration) {
  let result = this.films.every(function(film){
    return film.length >= duration;
  });
  return result;
};

Cinema.prototype.totalDuration = function(){
let ray = [];
for(let film of this.films){
  ray.push(film.length);
}
let reducer = (accumulator, currentValue) => accumulator + currentValue;
return ray.reduce(reducer);
}
module.exports = Cinema;
