import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyles";
import HomePage from './pages/HomePage';
import CoStudyPage from "./pages/CoStudyPage";
import CoProjectPage from "./pages/CoProjectPage";
import QnAPage from "./pages/QnAPage";
import MyPagePage from "./pages/MyPage";
import {Route, Link} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";


const App = () => {

  return (
    <>
      <GlobalStyle/>
        <Route component={HomePage} path={["/Home","/"]} exact/>
        <Route component={AboutPage} path="/About" />
        <Route component={CoStudyPage} path="/Co-Study"/>
        <Route component={CoProjectPage} path="/Co-Project"/>
        <Route component={QnAPage} path="/q&a"/>
        <Route component={MyPagePage} path="/MyPage"/>
        <Route component={LoginPage} path="/Login" />
        <Route component={RegisterPage} path="/Register" />
    </>
  );
};




export default App;
