import React, { Component } from "react";
import styled from "styled-components";
import Logo from '../../lib/images/logo.png';
import {Link} from 'react-router-dom';

const StyledHeaderContainer = styled.header`
  display: flex;
  flex-flow : row wrap;
  justify-content: space-between;
  width : 100%;
  height : 3em;
  border : 1px solid green;
  cursor: auto;
  /* min-width : 50%; */

  /* ul{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  } */

`

const StyledLogoWrap = styled.div`
  border : 2px dashed red;
  width : 10%;
  height: 100%;
  min-width : 10%;
`

const StyledNavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border : 2px dashed blue;
  width : 70%;
  height : 100%;
  padding : 0.2em 1rem;
`

const StyledNavMenu = styled.li`

  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin : 0 0.5rem;
  padding : auto 100px;
  border : 1px solid purple;
  width : 5em;
  height: 100%;
  font-size : 0.8em;
`

class Header extends Component {
  render() {
    return (
      <StyledHeaderContainer>
        <StyledLogoWrap>
          <Link to="/login">
            <img src={Logo} alt="home"/>
          </Link>
        </StyledLogoWrap>
        <StyledNavWrap>
            <StyledNavMenu>
              <Link to="/About">About</Link>
            </StyledNavMenu>
            <StyledNavMenu>
            <Link to="/Co-Study">Co-Study</Link>
            </StyledNavMenu><StyledNavMenu>
              <Link to="/Co-Project">Co-Project</Link>
            </StyledNavMenu><StyledNavMenu>
              <Link to="/Q&A">Q&A</Link>
            </StyledNavMenu><StyledNavMenu>
              <Link to="/MyPage">MyPage</Link>
            </StyledNavMenu>
        </StyledNavWrap>
      </StyledHeaderContainer>
      );
  }
}

export default Header;
