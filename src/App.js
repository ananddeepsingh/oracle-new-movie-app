// Router
import { BrowserRouter as Router } from 'react-router-dom';

// ANT
import { Layout } from 'antd';

import 'antd/dist/antd.min.css';

// Components
import HeaderComponent from 'components/header';
import FooterComponent from 'components/footer';

// Routes
import Routes from 'routes';

const {
  Content
} = Layout;

const App = () => {
  return <Router>
    <Layout id="movieApp">
      <HeaderComponent />
      <Content>
        <Routes />
      </Content>
      <FooterComponent />
    </Layout>
  </Router>
}

export default App;
