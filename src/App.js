import React, { Fragment } from "react";
import MainHeader from "./Components/Main/Header/MainHeader";
import MainBody from "./Components/Main/Body/MainBody";
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
