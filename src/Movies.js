import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./Context";
function Movies() {
  const { movie } = GlobalContext();
  console.log({ movie });
  return (
    <section className=" container movie-page">
      <div className="grid grid-4-col">
        {movie.map((current_movie) => {
          const { imdbID, Title, Poster } = current_movie;
          return (
            <NavLink to={`movie/${imdbID}`}>
              <div className="card">
                <div className="card-info">
                  <h2>{Title}</h2>
                  <img src={Poster} alt={imdbID}></img>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}
export default Movies;
