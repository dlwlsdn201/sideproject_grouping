import React, { Component } from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.png'




const MainHeader = () => {
    // render() {
        return (
            <HeaderWrap>
                    <div className="Header__top">
                        <HeaderTop>
                            <LogoWrap>
                                <img src={logoImg} width="100%"></img>
                            </LogoWrap>
                            <NavWrap>
                                <NavMenu><Link href="#">About</Link></NavMenu>
                                <NavMenu><Link href="#">Co-Study</Link></NavMenu>
                                <NavMenu><Link href="#">Co-Project</Link></NavMenu>
                                <NavMenu><Link href="#">Q&A</Link></NavMenu>
                                <NavMenu><Link href="#">MyPage</Link></NavMenu>
                                {/* <span className="navMenu__About">About</span> */}
                                {/* <span className="navMenu__Co-Study">Co-Study</span>
                                <span className="navMenu__Co-Project">Co-Project</span>
                                <span className="navMenu__Q&A">Q&A</span>
                                <span className="navMenu__MyPage">MyPage</span> */}
                            </NavWrap>
                        </HeaderTop>
                    </div>
                    <HeaderBottom>
                        div (For background Img & slogan)
                    </HeaderBottom>
            </HeaderWrap>
        );
    // }
}

export default MainHeader;

const HeaderWrap = styled.header`
    width :99.5%;   /*헤더 완성되면 border 제거 후 width:100%로 맞추기*/ 
    margin : 10px auto;
    border : 1px dashed green;
    background-color : lightyellow;
`
const HeaderTop = styled.div`
    display : flex;
    justify-content : space-between;
    margin-right : 1rem;
    background-color : lightcyan;
`
const LogoWrap = styled.nav`
    display : inherit;
    justify-content : center;
    width : 6em;
    /* max-width : 30em; */
    min-width : 5em;
    padding : 0;
    background-color : blueviolet;
`
const NavWrap = styled.nav`
    display : flex;
    width : 35em;
    max-width : 50rem;
    min-width : 35rem;
    height : 3.2em;
    justify-content : space-between;
    padding : 5px 20px;
    margin : auto 10px;
    background-color : lightgrey;
`
const NavMenu = styled.div`
    display : flex;
    align-items : center;
    width : 5em;
    text-align : center;
    padding : 0;
`
const Link = styled.a`
    text-decoration : none;
    color : black;

    ${NavMenu}:hover &{
        cursor : pointer;
        width : 100%;
        padding : 0;
    }

    &::after{
        content : "|";
        
    }
`
const HeaderBottom = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height: 300px;
    /* width: 100%; */
    background-color : lightcoral;
`