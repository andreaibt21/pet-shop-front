export const initialState = {
  basket: [],
  user: {},
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return { state };

    case "SET_USER":
      return {
        ...state,
        user: action.item, 
      //  basket: action.user.basket,
      };

    case "SIGN_IN":
      console.log("action.user", action.user);
      return {
        ...state,
        user: action.user,
        basket: action.user.basket,
      };

    case "REMOVE_USER":
      return { basket: [], user: {} };

    default:
      return state;
  }
};

//...
