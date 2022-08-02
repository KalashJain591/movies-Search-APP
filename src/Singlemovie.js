import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);
  const [display, setdisplay] = useState(false);
  const { isloading, error, movie } = useFetch(`&i=${id}`);

  function f1() {
    return (
      <>
        <p className="card-text">{movie.Released}</p>
        <p className="card-text">{movie.Genre}</p>
        <p className="card-text">{movie.imdbRating} / 10</p>
        <p className="card-text">{movie.Country}</p>
      </>
    );
  }
  if (isloading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading...</div>;
      </section>
    );
  }

  return (
    <section
      style={{
        backgroundColor: "pink",
        backgroundImage: `url(${movie.Poster})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      className="movie-section"
    >
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>

          <p style={{ display: display ? "" : "none" }} className="card-text">
            {movie.Language}
          </p>
          <p style={{ display: display ? "" : "none" }} className="card-text">
            {movie.Director}
          </p>
          <p style={{ display: display ? "" : "none" }} className="card-text">
            {movie.Actors}
          </p>
          <p style={{ display: display ? "" : "none" }} className="card-text">
            {movie.Plot}
          </p>

          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          <button
            style={{ display: display ? "none" : "" }}
            className="btn2"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            Know More
          </button>
          <button
            style={{ display: display ? "" : "none" }}
            className="btn2"
            onClick={() => {
              setdisplay(!display);
            }}
          >
            Know Less
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
