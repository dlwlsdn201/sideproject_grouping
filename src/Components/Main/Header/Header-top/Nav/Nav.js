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
    width: 35em;
    max-width: 50rem;
    min-width: 35rem;
    height: 3.2em;
    justify-content: space-between;
    padding: 5px 20px;
    margin: auto 10px;
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

    &::after {
        position : absolute;
        content: "|";
        margin : 0;
        margin-left : 2%;
    }
`;

export default Nav;