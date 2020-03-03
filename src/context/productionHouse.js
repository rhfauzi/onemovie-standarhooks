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
  ],
  movie: [
    {
      id: 1,
      movie: "Spider Man",
      genre: "Action",
      rating: "G-General Audiences",
      productionHouseId: 2
    },
    {
      id: 2,
      movie: "Bat Man",
      genre: "Action",
      rating: "G-General Audiences",
      productionHouseId: 1
    },
    {
      id: 3,
      movie: "Super Man",
      genre: "Action",
      rating: "G-General Audiences",
      productionHouseId: 2
    }
  ]
});

export default Store;
