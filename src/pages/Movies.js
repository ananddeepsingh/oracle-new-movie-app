// Antd
import {
  Row,
  Col,
} from 'antd';

// React
import {
  useEffect,
  useState
} from 'react';

// Database
import MovieDatabase from '../assets/data/sample.json'

// Components
import ModalBox from 'components/modalBox';
import MovieTile from 'components/movieTile';
import { Link } from 'react-router-dom';
import Pagination from 'components/pagination';


const Movies = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalBoxTitle, setModalBoxTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [selectedReleaseYear, setSelectedReleaseYear] = useState("");
  const [moviesDatabase, setMoviesDatabase] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  let currentMovies = null;

  useEffect(() => {
    setMoviesDatabase(MovieDatabase.entries);
  }, []);


  // pagination
  if (moviesDatabase?.length > 0) {
    const indexOfLastPost = currentPageNumber * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentMovies = moviesDatabase.slice(indexOfFirstPost, indexOfLastPost)
  }

  const handleTileClick = (tile) => {
    const selectedMovie = MovieDatabase.entries.find(movie => movie.title === tile);
    setModalBoxTitle(tile);
    setIsModalVisible(!isModalVisible);
    setMovieDescription(selectedMovie.description);
    setSelectedReleaseYear(selectedMovie.releaseYear);
  }

  const renderData = () => {
    const data = []
    currentMovies.map((record, index) => {
      const {
        title,
        images,
        releaseYear
      } = record;

      const {
        height,
        width
      } = images || {}

      return data.push(
        <Col key={index} span={3} className="ant-col ant-col-6 gutter-row tile">
          <MovieTile
            releaseYear={releaseYear}
            src={`${process.env.PUBLIC_URL}/images/tile.jpg`}
            height={height}
            width={width}
            title={title}
            handleClick={() => handleTileClick(title)}
          />
        </Col>
      )
    });

    return <Row
      className="tile-wrapper"
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {data}
    </Row>
  }

  const paginate = (currentNumber) => setCurrentPageNumber(currentNumber)

  return <div>
    <div className="page-heading"><Link to="/">Movies</Link></div>
    {currentMovies?.length > 0 && <div className="page-content">
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={moviesDatabase?.length}
        paginate={paginate}
      />

      {renderData()}
    </div>}

    <ModalBox
      title={modalBoxTitle}
      isModalVisible={isModalVisible}
      handleOk={() => setIsModalVisible(!isModalVisible)}
      handleCancel={() => setIsModalVisible(!isModalVisible)}
      data={movieDescription}
      releaseYear={selectedReleaseYear}
    />

  </div>
}

export default Movies;
