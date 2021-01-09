import React, {Component,Fragment} from 'react';
import MainHeader from './Components/MainHeader';
import MainBody from './Components/MainBody';
import './App.css';
import styled from 'styled-components';

class App extends Component{
  render(){
    return (
      <AppWrap>
        <MainHeader/>
        <MainBody/>  
      </AppWrap>
      );
  }
}

const AppWrap = styled.div`
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

export default App;
