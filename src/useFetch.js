// useFetch  function is basically created to fetch  all the information
// whenever required by any component . Here it was required by single movie
// and movies component.
// The usefetch function takes parameter as the `&i=${id}`

import React, { useState, useEffect } from "react";

// setting the api link
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isloading, setloading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [error, seterror] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    setloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data.Response === "True") {
        setloading(false);
        setmovie(data.Search || data);
        seterror({ show: "false", msg: "" });
      } else {
        seterror({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    var timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${apiParams}`);
    }, 2000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isloading, error, movie };
};

export default useFetch;
