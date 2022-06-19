//Types
import errorMessageReducer from 'reducers/errorMessageReducer';
import {
  CLEAR_MESSAGE,
  SET_MESSAGE,
  GET_FACTS_SUCCESS
} from '../types';
const { getFactsReducer } = require("reducers/getFactsReducer");

const initialState = "";

const state = {
  errorMessageTxt: "this is test message"
}

describe("Error Message Reducer", () => {
  it("should return blank state", () => {
    expect(errorMessageReducer(undefined, {})).toEqual(initialState)
  });

  it("should return error message", () => {
    expect(errorMessageReducer({}, {
      type: SET_MESSAGE,
      payload: "this is test message"
    })).toEqual(state)
  })


  it("should return error message", () => {
    expect(errorMessageReducer({}, {
      type: CLEAR_MESSAGE
    })).toEqual({
      errorMessageTxt: null
    })
  })
})
