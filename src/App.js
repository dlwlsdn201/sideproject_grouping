import React, { Fragment } from "react";
import MainHeader from "./Components/Home/Header/MainHeader";
import MainBody from "./Components/Home/Main/MainBody";
import "./App.css";
import GlobalStyle from "./GlobalStyles"


const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <MainHeader/>
      <MainBody/>
    </Fragment>
  );
};




export default App;
