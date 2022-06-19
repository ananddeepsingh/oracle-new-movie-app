import {
  Row,
  Col
} from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {

  return <>
    <div className="page-heading">Popular Tiles</div>
    <div className="page-content">
      <Row gutter={24} className="tile">
        <Col span={3} className="ant-col ant-col-6 gutter-row tile"><h2><Link to="/series">Series</Link></h2><p>Popular Series</p></Col>
        <Col span={3} className="ant-col ant-col-6 gutter-row tile"><h2><Link to="/movies">Movies</Link></h2><p>Popular Movies</p></Col>
      </Row>
    </div>
  </>
}

export default Home;
