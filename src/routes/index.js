// React Router
import {
  Route,
  Routes
} from 'react-router-dom';

// 404 Route
import NoMatch from './notFound';

// Pages
import Home from "../pages/Home";
import Series from 'pages/Series';
import Movies from 'pages/Movies';

const RoutesPage = () => {
  return <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/series" element={<Series />}></Route>
    <Route path="/movies" element={<Movies />}></Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
}

export default RoutesPage;
