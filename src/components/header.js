import {
  Layout,
  Row,
  Col
} from 'antd';
import { Link } from 'react-router-dom';

const {
  Header,
} = Layout;

const HeaderComponent = () => {
  return <Header id="topHeader">
    <Row>
      <Col span={18}>
        <h1><Link to="/">Demo Streaming</Link></h1>
      </Col>
      <Col span={6}>
        Login <a href="#" className="trial" title="Start your free trial">Start your free trial</a>
      </Col>
    </Row>
  </Header>
}

export default HeaderComponent;
