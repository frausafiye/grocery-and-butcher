import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/checkout/checkout.css";
import "antd/dist/antd.css"; //use bootstrap instead!!!!

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById("root")
);
