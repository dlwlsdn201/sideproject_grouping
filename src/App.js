import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyles";
import HomePage from "./Components/Home/HomePage";
import CoStudyPage from "./Components/Co-Study/CoStudyPage";
import CoProjectPage from "./Components/Co-Project/CoProjectPage"
import QnAPage from "./Components/Q&A/QnAPage"
import MyPagePage from "./Components/MyPage/MyPage"
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Route component={HomePage} path={["/Home", "/"]} exact/>
      <Route component={CoStudyPage} path="/Co-Study"/>
      <Route component={CoProjectPage} path="/Co-Project"/>
      <Route component={QnAPage} path="/Q&A"/>
      <Route component={MyPagePage} path="/MyPage"/>
    </>
  );
};




export default App;
