import ReactDOM from "react-dom";
import { products } from "./mock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import ProductPage from "./productPage/product-page";
import App from "/src/app/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    {/* <ProductPage product={products[0]} showInfoInAccordion /> */}
  </ThemeProvider>,
  rootElement
);
