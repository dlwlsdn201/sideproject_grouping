import React, {Component,Fragment} from 'react';
import MainHeader from './Components/mainHeader';
import MainBody from './Components/mainBody';
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
