import styled, { createGlobalStyle } from "styled-components";
import palette from "./lib/styles/palette";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0;
        height: auto;
        width: 100%;
        font-size: 1em;
        background : ${palette.gray[3]};
        display : flex;
        flex-flow: column nowrap;
        align-items: center;
        color : #E0E1E2;
    }

    ul{
        margin : 0;
    }

    header,main,footer,section{
        margin: 0 auto;
    }

    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* (min-width: 320px) and */
        @media (max-width: 768px){
        flex-flow: column nowrap;
        height: auto;
        }
    }

    .StyledSlideBlock{
        background: ${palette.skyblue[0]};
        text-align: center;
        width: 100%;
        padding: 0;

    }


    img{
    max-width : 100%;
    max-height : 100%;

    }
    a{
        text-decoration : none;
        color: inherit;
        text-align: center;
        margin : 0;
        padding: 0;
    }
    
    *{
        box-sizing : border-box;
    }
    
    li{
        list-style: none;
    }

    h1{
        margin: 0 auto;
        margin-bottom : 1em;
        text-align: center;
    }


`;

export default GlobalStyles;
