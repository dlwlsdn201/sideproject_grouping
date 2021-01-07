import React, { Component } from 'react';
import styled from 'styled-components';

class MainHeader extends Component {
    render() {
        return (
            <HeaderWrap>
                    <div className="Header__top">
                        <HeaderTop>
                            <LogoWrap>
                                {/* 로고 이미지 들어갈 곳 */}
                                div (For Logo)
                            </LogoWrap>
                            <NavWrap>
                                <span className="navMenu__About">About</span>
                                <span className="navMenu__Co-Study">Co-Study</span>
                                <span className="navMenu__Co-Project">Co-Project</span>
                                <span className="navMenu__Q&A">Q&A</span>
                                <span className="navMenu__MyPage">MyPage</span>
                            </NavWrap>
                        </HeaderTop>
                    </div>
                    <HeaderBottom>
                        div (For background Img & slogan)
                    </HeaderBottom>
            </HeaderWrap>
        );
    }
}

const HeaderWrap = styled.header`
    width :100vw;
    margin : 10px auto;
    border : 1px dashed green;
    background-color : lightyellow;
`

const HeaderTop = styled.div`
    display : flex;
    justify-content : space-between;
    margin : auto 2rem;
    margin-right : 4rem;
    background-color : lightcyan;
`
const NavWrap = styled.nav`
    display : flex;
    width : 40rem;
    /* max-width : 50rem;
    min-width : 30rem; */
    justify-content : space-between;
    padding : 5px 50px;
    margin : auto 10px;
    background-color : lightgrey;
`
const LogoWrap = styled.nav`
    width : 20rem;
    max-width : 30rem;
    min-width : 10rem;
    background-color : blueviolet;
`


const HeaderBottom = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height: 300px;
    background-color : lightcoral;
`







export default MainHeader;