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

Cinema.prototype.filterByYear = function (year) {
  let result = this.films.some(film => film.year === year);
  return result;
};

Cinema.prototype.hasDuration = function (duration) {
  let result = this.films.every(film => film.length >= duration);
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
