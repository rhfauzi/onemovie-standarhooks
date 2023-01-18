export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTION_HOUSE":
      // return current state if empty
      if (!action.payload) {
        return state;
      }

      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case "DELETE_PRODUCTION_HOUSE":
      let newDataDelete = [];
      const dataDelete = state.data.filter((event, index) => {
        if (index + 1 !== action.payload.id) {
          let data = {
            id: action.payload.id,
            name: action.payload.name
          };

          newDataDelete.push(data);
          return newDataDelete;
        }
      });

      return {
        ...state,
        data: dataDelete
      };

    case "EDIT_PRODUCTION_HOUSE":
      const stateCopy = state.data.map(item => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id;
          item.name = action.payload.name;
        }
        return item;
      });

      return {
        ...state,
        data: stateCopy
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movie: [...state.movie, action.payload]
      };

    case "DELETE_MOVIE":
      let newData = [];
      const dataFilter = state.movie.filter((event, index) => {
        if (index + 1 !== action.payload) {
          let data = {
            id: state.movie[index].id,
            movie: state.movie[index].movie,
            genre: state.movie[index].genre,
            rating: state.movie[index].rating,
            productionHouseId: state.movie[index].productionHouseId
          };

          newData.push(data);
          return newData;
        }
      });

      return {
        ...state,
        movie: dataFilter
      };

    case "EDIT_MOVIE":
      const getData = state.movie.map(item => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id;
          item.movie = action.payload.movie;
          item.genre = action.payload.genre;
          item.rating = action.payload.rating;
          item.productionHouseId = action.payload.productionHouseId;
        }
        return item;
      });

      return {
        ...state,
        movie: getData
      };

    default:
      return state;
  }
}
