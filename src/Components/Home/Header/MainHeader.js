import React, { Component } from "react";
import styled from "styled-components";
import Header_Top from "./Header-top/Header_top";
import Header_Bottom from "./Header-bottom/Header_bottom"


class MainHeader extends Component {
  render() {
    return (
      <header>
        <Header_Top/>
        <Header_Bottom/>
      </header>
    );
  }
}

export default MainHeader;

// const HeaderWrap = styled.header`
//   /* display: inline-block; */
//   width: 99.5%; /*헤더 완성되면 border 제거 후 width:100%로 맞추기*/
//   margin: 10px auto;
//   border: 1px dashed green;
//   background-color: lightyellow;
// `;