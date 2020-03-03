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
        data: action.payload.data
      };

    case "EDIT_PRODUCTION_HOUSE":
      console.log("action payload", action.payload);

      const stateCopy = state.data.map(item => {
        if (item.id === action.payload.id) {
          console.log(
            `if item.id ${item.id} = action.payload.id ${action.payload.id}`
          );

          console.log("action.payload.name", action.payload.name);
          item.id = action.payload.id;
          item.name = action.payload.name;
        }
        return item;
      });
      console.log("stateCopy", stateCopy);

      return {
        data: stateCopy
      };

    case "ADD_MOVIE":
      // return current state if empty
      console.log("state", state);
      console.log("action", action);

      return {
        ...state,
        movie: [...state.movie, action.payload]
      };

    default:
      return state;
  }
}
