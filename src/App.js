import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import CoStudyPage from "./pages/CoStudyPage";
import CoProjectPage from "./pages/CoProjectPage"
import QnAPage from "./pages/QnAPage"
import MyPagePage from "./pages/MyPage"
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
