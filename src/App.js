import React, { Fragment } from "react";
import MainHeader from "./Components/Main/Header/MainHeader";
import MainBody from "./Components/Main/Body/MainBody";
import "./App.css";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrap>
      <MainHeader/>
      <MainBody/>
    </AppWrap>
  );
};


const AppWrap = styled.div`
  font-size: 1.1rem;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
