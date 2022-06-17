import {
  Layout,
  Row,
  Col
} from 'antd';


const {
  Footer,
} = Layout;

const FooterComponent = () => {
  return <Footer>
    <nav id="footerNav">
      <li><a href="#home">Home</a></li>
      <li><a href="#news">Terms and Conditions</a></li>
      <li><a href="#contact">Privacy Policy</a></li>
      <li><a href="#about">Collection Statement</a></li>
      <li><a href="#about">Help</a></li>
      <li><a href="#about">Manage Account</a></li>
    </nav>
    <p>Copyright &copy; Demo Streaming. All Rights Reserved</p>
  </Footer>
}

export default FooterComponent;
