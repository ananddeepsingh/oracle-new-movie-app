const { default: getFactsReducer } = require("reducers/getFactsReducer");
const { GET_FACTS_SUCCESS } = require("types");

const initialState = "";
const state = {
  fact: "this is test message"
}

describe("Get Number Facts Reducer", () => {
  it("should return blank state", () => {
    expect(getFactsReducer(undefined, {})).toEqual(initialState)
  });

  it("should return fact message", () => {
    expect(getFactsReducer(undefined, {
      type: GET_FACTS_SUCCESS,
      payload: "this is test message"
    })).toEqual(state)
  })
})
