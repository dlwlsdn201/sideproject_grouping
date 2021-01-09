import React, { Component, Fragment } from "react";
import MainHeader from "./Components/MainHeader";
import MainBody from "./Components/MainBody";
import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <AppWrap>
        <MainHeader />
        <MainBody />
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
<<<<<<< HEAD
  font-size : 1rem;
  width : 100%;
  height: 100vh;
  max-width : 100%;
  max-height : 100%;
  margin : 0 ;
  display : flex;
  flex-direction : column;
  align-items : center;
`
=======
  font-size: 1.1rem;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
>>>>>>> 26012e11830b60c10cf9deae28c163d1f53bfe26

export default App;
