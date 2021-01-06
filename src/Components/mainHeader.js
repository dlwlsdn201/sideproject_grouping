import React, { Component } from 'react';
import styled from 'styled-components';

class mainHeader extends Component {
    render() {
        return (
            <HeaderWrap>
                    <div className="Header__top">
                        <HeaderTop>
                            <div className="logoBox">
                                {/* 로고 이미지 들어갈 곳 */}
                                div (For Logo)
                            </div>
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

const HeaderWrap = styled.section`
    width : 100%;
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
    width : 400px;
    justify-content : space-between;
    padding : 5px 50px;
    background-color : lightgrey;
`

const HeaderBottom = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height: 300px;
    background-color : lightcoral;
`







export default mainHeader;