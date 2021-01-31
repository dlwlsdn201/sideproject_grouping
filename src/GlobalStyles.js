import styled, { createGlobalStyle } from "styled-components";
import palette from "./lib/styles/palette";

const GlobalStyles = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        font-size: 1em;
        background : ${palette.gray[3]};
        display : flex;
        flex-flow: column nowrap;
        align-items: center;
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
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        background: #fff2ac;
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


`;

export default GlobalStyles;
