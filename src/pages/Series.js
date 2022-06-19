// ANTD
import {
  Row,
  Col,
  Spin,
  Modal
} from 'antd';

// React and Redux
import {
  useEffect,
  useState
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { Link } from 'react-router-dom';

// Action
import { getNumberFactsAction } from 'actions/getNumberFactsAction';

// Components
import ModalBox from 'components/modalBox';
import MovieTile from 'components/movieTile';

// Database
import MovieDatabase from '../assets/data/sample.json'
import { clearMessageAction } from 'actions/errorMessageAction';

const Series = () => {
  const dispatch = useDispatch();
  const { fact } = useSelector((state) => state.facts);
  const store = useSelector((state) => state);
  console.log(store)
  const [seriesDataset, setSeriesDataset] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFactModalVisible, setIsFactModalVisible] = useState(false);
  const [modalBoxTitle, setModalBoxTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [selectedReleaseYear, setSelectedReleaseYear] = useState("");

  useEffect(() => {
    setIsPageLoading(true);

    setTimeout(() => {
      setSeriesDataset(MovieDatabase);
      setIsPageLoading(false);
    }, 1000)

  }, []);

  const handleTileClick = (tile) => {
    const selectedMovie = MovieDatabase.entries.find(movie => movie.title === tile);
    setModalBoxTitle(tile);
    setIsModalVisible(!isModalVisible);
    setMovieDescription(selectedMovie.description);
    setSelectedReleaseYear(selectedMovie.releaseYear);
  }

  const handleOk = async (releaseYear) => {
    // page loading start
    setIsPageLoading(true);

    // clear error messages
    dispatch(clearMessageAction());
    await dispatch(getNumberFactsAction(+releaseYear));

    // handling show and hide of Modal box and page loader end
    setIsPageLoading(false);
    setIsModalVisible(!isModalVisible);
    setIsFactModalVisible(!isFactModalVisible)
  }

  const renderData = () => {
    const data = []
    seriesDataset.entries.map((record, index) => {
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

  return <Spin spinning={isPageLoading} tip="Loading...">
    <div className="page-heading"><Link to="/">Series</Link></div>
    <div className="page-content">
      {seriesDataset?.entries?.length > 0 && renderData()}
    </div>

    {/* Modal Box */}
    <ModalBox
      title={modalBoxTitle}
      isModalVisible={isModalVisible}
      handleOk={(releaseYear) => handleOk(releaseYear)}
      handleCancel={() => setIsModalVisible(!isModalVisible)}
      data={movieDescription}
      releaseYear={selectedReleaseYear}
    />

    {/* Fun Fact Modal */}
    {fact?.length > 0 && <Modal
      title={"Fun Fact"}
      visible={isFactModalVisible}
      onOk={() => setIsFactModalVisible(!isFactModalVisible)}
      onCancel={() => setIsFactModalVisible(!isFactModalVisible)}
    >
      <p>{fact}</p>
    </Modal>}

  </Spin>
}

export default Series;
