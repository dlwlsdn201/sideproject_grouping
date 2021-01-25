import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../lib/images/logo.png";
import { Link } from "react-router-dom";



const StyledHeaderContainer = styled.header`
  position: fixed;
  left: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100vw;
  height: 14vh;
  max-height: 14vh;
  border: 1px solid green;
  color: white;
  cursor: auto;
  z-index: 99;
  font-size: 3vh;
  background: rgba(0,0,0,0.7);

  &:hover {
    background: rgba(66, 13, 136, 0.5);
  }


  @media(min-width: 320px) and (max-width: 768px){
    height: 15vh;
    background: blue;
  }

`;

const StyledLogoWrap = styled.div`
  /* border : 2px dashed red; */
  width: 12%;
  height: 100%;

`;

const StyledNavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border : 2px dashed blue; */
  width: 78%;
  height: 100%;

`;

const StyledNavMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-grow: 1;
  margin: 0 1.2em;
  width: 100%;
  height: 100%;
  

  a{
    height: 100%; 
    width: 100%; 
    padding: 1.5em 0;
  }
  &:hover {
    background: #420d88;
  }
  `;

class Header extends Component {
  render() {
    return (
      <StyledHeaderContainer>
        <StyledLogoWrap>
          <Link to="/login">
            <img src={Logo} alt="home" />
          </Link>
        </StyledLogoWrap>
        <StyledNavWrap>
          <StyledNavMenu>
            <Link to="/About">About</Link>
          </StyledNavMenu>
          <StyledNavMenu>
            <Link to="/Co-Study">Co-Study</Link>
          </StyledNavMenu>
          <StyledNavMenu>
            <Link to="/Co-Project">Co-Project</Link>
          </StyledNavMenu>
          <StyledNavMenu>
            <Link to="/Q&A">Q&A</Link>
          </StyledNavMenu>
          <StyledNavMenu>
            <Link to="/MyPage">MyPage</Link>
          </StyledNavMenu>
        </StyledNavWrap>
      </StyledHeaderContainer>
    );
  }
}

export default Header;
