import { GET_FACTS_SUCCESS } from "../types";

const initialState = "";

const getFactsReducer = (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_FACTS_SUCCESS:
      return {
        ...state,
        fact: payload
      }

    default:
      return state
  }

}

export default getFactsReducer;
