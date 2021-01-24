import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../lib/images/logo.png";
import { Link } from "react-router-dom";



const StyledHeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  height: 3.5em;
  border: 1px solid green;
  color: white;
  cursor: auto;
  z-index: 99;
  font-size: 1.5em;
  background: rgba(0,0,0,0.7);

  &:hover {
    background: rgba(66, 13, 136, 0.5);
  }

  &if

`;

const StyledLogoWrap = styled.div`
  /* border : 2px dashed red; */
  width: 7.5rem;
  height: 100%;
  min-width: 5rem;
`;

const StyledNavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border : 2px dashed blue; */
  width: 70%;
  height: 100%;
  padding: 0.2em 1rem;
`;

const StyledNavMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-grow: 1;
  margin: 0 0.5rem;
  padding: auto 100px;
  width: 5em;
  height: 100%;
  font-size: 0.8em;
  
  a{height: 100%; width: 100%; padding: 1.5rem 0}
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
