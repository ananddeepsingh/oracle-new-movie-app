import Routes from 'routes';
import { MemoreRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const Home = () => <h1>Home Page</h1>

let store;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn()
}));

jest.mock("page/Home", () => {
  return Home
});

describe("Index Route", () => {
  beforeEach(() => {
    store = mockStore({});
  })

  it("should send to home page", () => {

    <Provider>
      <MemoreRouter initialEntries={["/home"]}>
        <Routes exact path="/home" component={Home} />
      </MemoreRouter>
    </Provider>

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
