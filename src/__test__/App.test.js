import App from '../App';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("App Component", () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      facts: "",
      errorMessage: ""
    });

    component = renderer.create(
      <Provider>
        <Route>
          <App />
        </Route>
      </Provider>
    )
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  })
})
