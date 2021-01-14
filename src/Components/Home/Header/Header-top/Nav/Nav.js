import React from 'react';
import styled from "styled-components";

//Header Logo 컴포넌트

const Nav = () => {
    return (
        <NavWrap>
            <NavMenu>
            <Link href="#">About</Link>
            </NavMenu>
            <NavMenu>
            <Link href="#">Co-Study</Link>
            </NavMenu>
            <NavMenu>
            <Link href="#">Co-Project</Link>
            </NavMenu>
            <NavMenu>
            <Link href="#">Q&A</Link>
            </NavMenu>
            <NavMenu>
            <Link href="#">MyPage</Link>
            </NavMenu>
        </NavWrap>
    );
};

const NavWrap = styled.nav`
    display: flex;
    width: 60%;
    height: 2.4em;
    justify-content: space-between;
    padding: 0.5% 3%;
    margin: auto 0;
    background-color: lightgrey;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 5em;
    text-align: center;
    padding: 0;
`;



const Link = styled.a`
    text-decoration: none;
    color: black;

    ${NavMenu}:hover & {
        cursor: pointer;
        width: 100%;
        padding: 0;
    }
`;

export default Nav;