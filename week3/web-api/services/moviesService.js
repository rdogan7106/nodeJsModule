const movies = require("../data/moviesData");
const { v4: uuidv4 } = require("uuid");

const findAllMovies = () => {
  return movies;
};
const findMovie = (pID) => {
  const movie = movies.find((movie) => movie.id === pID);
  console.log(movie);
  return movie;
};

const deletedMovie = (pID) => {
  const movieDeleted = movies.filter((movie) => movie.id !== pID);
  return movieDeleted;
};

const addNewMovie = (pMovie) => {
  let id = uuidv4();
  movies.push({ id: id, ...pMovie });
  
  return movies;
};

const createDB = () => {
  const newDb = movies.createDB
  return newDb
}
const createTable = () => {
  const newTable = movies.createTable
  return  newTable
}
module.exports = { findAllMovies, findMovie, addNewMovie, deletedMovie ,createDB, createTable};
