const express = require("express");
const {
  getMovie,
  getMovies,
  addMovie,
  deleteMovie,
  updateMovie,
  createdb
} = require("../controllers/moviesRouter");
const moviesRouter = express.Router();

moviesRouter.get("/", getMovies);
moviesRouter.get("/:id", getMovie);
moviesRouter.post("/", addMovie);
moviesRouter.delete("/:id", deleteMovie);
moviesRouter.put("/:id", updateMovie);
moviesRouter.put("/createDb", createdb);

module.exports = moviesRouter;
