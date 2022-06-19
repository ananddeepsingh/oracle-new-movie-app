import { Col, Layout, Row } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => {
  return <Footer>
    <nav id="footerNav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">Terms and Conditions</a></li>
        <li><a href="#contact">Privacy Policy</a></li>
        <li><a href="#about">Collection Statement</a></li>
        <li><a href="#about">Help</a></li>
        <li><a href="#about">Manage Account</a></li>
      </ul>
    </nav>
    <p>Copyright &copy; Demo Streaming. All Rights Reserved</p>
    <Row gutter={24}>
      <Col span={6}>
        <nav id="socialIcons">
          <ul>
            <li><a className="facebook" href="#facebook">Facebook</a></li>
            <li><a className="twitter" href="#Twitter">Twitter</a></li>
            <li><a className="instagram" href="#Instagram">Instagram</a></li>
          </ul>
        </nav>
      </Col>
      <Col push={10}>
        <nav id="appDownload">
          <ul>
            <li><a className="apple-store" href="#apple">Apple Store</a></li>
            <li><a className="google-store" href="#google">Google Play Store</a></li>
            <li><a className="microsoft-store" href="#Microsoft">Microsoft</a></li>
          </ul>
        </nav>
      </Col>
    </Row>
  </Footer>
}

export default FooterComponent;
