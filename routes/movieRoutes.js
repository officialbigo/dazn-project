const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
const {
  getMovies,
  searchMovies,
  postMovies,
  updateMovie,
  deleteMovie,
} = require(`../controllers/movieControllers`);

router.route("/movies").get(getMovies).post(validateToken, postMovies);

router
  .route("/movies/:id")
  .put(validateToken, updateMovie)
  .delete(validateToken, deleteMovie);

router.route("/search").get(searchMovies);

module.exports = router;
