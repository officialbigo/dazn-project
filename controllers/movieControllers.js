const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
const getMovies = asyncHandler(async (req, res) => {
  const contacts = await Movie.find({});
  res.status(200).json(contacts);
});

const searchMovies = asyncHandler(async (req, res) => {
  const searchQuery = req.query.q;
  const movies = await Movie.find({
    $or: [{ title: searchQuery }, { genre: searchQuery }],
  });

  if (movies && movies.length > 0) {
    res.status(200).json(movies);
  } else {
    res.status(401);
    throw new Error("No movies with the specified title or genre");
  }
});

const postMovies = asyncHandler(async (req, res) => {
  const { title, genre, rating, streaming_link } = req.body;
  if (!title || !genre || !rating || !streaming_link) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const movie = await Movie.create({
    title,
    genre,
    rating,
    streaming_link,
  });
  res.status(201).json(movie);
});

const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(404);
    throw new Error("Not found");
  }
  const newContact = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(newContact);
});

const deleteMovie = asyncHandler(async (req, res) => {
  const contact = await Movie.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Not found");
  }
  await Movie.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getMovies,
  searchMovies,
  updateMovie,
  deleteMovie,
  postMovies,
};
