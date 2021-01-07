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
  font-size : 1.1rem;
`

export default App;
