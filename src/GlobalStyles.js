import styled, {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    html{
        margin : 0;
        padding : 0;
        width : 100%;
        height : 100%;
    }

    body{
        background : grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        min-width : 800px;
        font-size: 1.1rem;
        margin: 0;
        padding : 0;
    
    }

    div{
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        padding: 0;
        margin : 0;
    }

    header, footer, section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw; /*헤더 완성되면 border 제거 후 width:100%로 맞추기*/
        height : 100%;
        margin: 1% 0;
        padding: 1em;
        border: 1px dashed green;
        background-color: lightyellow;
    };



    img{
    width : auto;
    height : auto;
    max-width : 100%;
    max-height : 100%;

    a{
        text-decoration : none;
        color: inherit;
    }
    }

` 

export default GlobalStyles;
