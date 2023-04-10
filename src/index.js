import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import {
  DataContext,
  DataProvider,
} from "./Questions/Question1_5.js/Contexts/DataContext";
import {
  CartContext,
  CartProvider,
} from "./Questions/Question1_5.js/Contexts/CartContext";
import {
  WishListContext,
  WishListProvider,
} from "./Questions/Question1_5.js/Contexts/WishListContext";

export { DataContext };
export { CartContext };
export { WishListContext };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
