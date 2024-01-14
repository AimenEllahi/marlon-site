import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dealer from "./pages/Dealers";
import ProductDetails from "./pages/ProductDetails";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Dealer />
      </Layout>
    ),
  },
  {
    path: "/product-details",
    element: (
      <Layout>
        <ProductDetails />
      </Layout>
    ),
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
