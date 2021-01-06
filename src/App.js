import React, {Component} from 'react';
import styled from 'styled-components';
import mainHeader from './Components/mainHeader';
import mainBody from './Components/mainBody';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <mainHeader/>
        <mainBody/>
        
      </div>
      );
  }
}

// const mainHeader = styled.div`
//     display : inline-block;
// `


export default App;
