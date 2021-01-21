import styled, {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        font-size: 1.2em;

    }

    img{
    width : 100%;
    height : 100%;
    max-width : 100%;
    max-height : 100%;

    }
    a{
        text-decoration : none;
        color: inherit;
        text-align: center;
        margin : 20% 0;
        padding : 0.5rem 0;
        height: 100%;
    }
    
    *{
        box-sizing : border-box;
    }
    
` 

export default GlobalStyles;
