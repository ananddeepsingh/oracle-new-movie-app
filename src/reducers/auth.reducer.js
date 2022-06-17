import { LOGIN_SUCCESS } from "../types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        fact: payload
      }

    default:
      return state
  }

}

export default authReducer;
