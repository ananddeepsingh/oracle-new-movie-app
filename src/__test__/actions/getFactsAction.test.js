// Action
import { getFactsAction } from 'actions/getFactsAction';

// Mock Store and thunk
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// type
import { GET_FACTS_SUCCESS } from 'types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

describe("get Number Facts Action", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    store.clearActions();
  });

  it("should get facts", async () => {

    //arrange
    const serverResponse = {
      response: "This is test",
      error: null
    };

    //act
    fetch.mockReturnValue(Promise.resolve(new Response(JSON.stringify(response))));

    await store.dispatch(getFactsAction(5));
    const actualActions = store.getActions().map((action) => action.type);

    //assert
    expect(actualActions).toEqual([GET_FACTS_SUCCESS]);
  })
})
