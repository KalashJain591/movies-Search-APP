import React, { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";
// function Context() {
//   return <h1>Hello</h1>;
// }
// export default Context;
//  Context(warehouse);
//  provider(delivelry boy)
//  Consumer(you 'the consumer')
const Api_Url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setquery] = useState("titanic");
  const { isloading, error, movie } = useFetch(`${query}`);

  return (
    <AppContext.Provider value={{ isloading, movie, error, query, setquery }}>
      {children}
    </AppContext.Provider>
  );
};

function GlobalContext() {
  return useContext(AppContext);
}
export { AppContext, AppProvider, GlobalContext };
