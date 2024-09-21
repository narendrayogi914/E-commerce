// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DefaultStyledComponent from "./hoc/DefaultStyledComponent";

function App() {
  return (
    <>
      <Header />
      <DefaultStyledComponent>
        <Outlet /> {/* This is where route components will be rendered */}
      </DefaultStyledComponent>
      <Footer />
    </>
  );
}

export default App;
