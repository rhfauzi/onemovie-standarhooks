import React from "react";

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
const Store = React.createContext({
  data: [
    { id: 1, name: "Md Entertaiment" },
    { id: 2, name: "Screenplay Productions" }
  ]
});

export default Store;
