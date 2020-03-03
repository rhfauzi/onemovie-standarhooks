import React from "react";
const connector = connect();

// const Store = React.createContext({
//   productionHouse: [
//     { id: 1, name: "Md Entertaiment" },
//     { id: 2, name: "Screenplay Productions" }
//   ],
//   movie: [
//     { id: 1, name: "Batman" },
//     { id: 2, name: "Spider Man" }
//   ]
// });
// {
//   "productionHouse":[
//     {"id":1,"name":"Md Entertaiment"},
//     {"id":2,"name":"Screenplay Productions"}
//   ],
//   "movie":[{"id":1,"name":"Batman"},{"id":2,"name":"Spider Man"}]
// }
const productionHouse = React.createContext([
  { id: 1, name: "Md Entertaiment" },
  { id: 2, name: "Screenplay Productions" }
]);
const movie = React.createContext([
  { id: 1, name: "Batman" },
  { id: 2, name: "Spider Man" }
]);

export default connector(productionHouse, movie);
