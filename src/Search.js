import React, { useContext, useEffect, useState } from "react";
import Context, { GlobalContext } from "./Context";
import "./App.css";

function Search() {
  const { query, setquery, error } = GlobalContext();
  const [movie, setmovie] = useState(`{query}`);

  function f1(props) {
    var t = props.target.value;
    setquery(t);
    // console.log(t);
  }
  return (
    <section className="search-section">
      <h2>Search your movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Enter the movie name"
            value={query}
            onChange={f1}
          ></input>
        </div>
      </form>
      <div className="card-error">
        <p>{error.show && error.msg}</p>
      </div>
    </section>
  );
}
export default Search;
