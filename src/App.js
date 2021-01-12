import React, { Fragment } from "react";
import HomeHeader from "./Components/Home/Header/HomeHeader";
import HomeBody from "./Components/Home/Main/HomeMain";
import "./App.css";
import GlobalStyle from "./GlobalStyles"
import Footer from "./Components/Home/Footer/Footer";


const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <HomeHeader/>
      <HomeBody/>
      <Footer/>
    </Fragment>
  );
};




export default App;
