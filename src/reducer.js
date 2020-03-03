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
      return {
        ...state,
        data: action.payload.data
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

    default:
      return state;
  }
}
