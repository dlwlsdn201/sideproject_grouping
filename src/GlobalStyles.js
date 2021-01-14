import styled, {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    body{
        background : grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 1.1rem;
        margin: 0.1% 0;
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

    header, main, footer, section{
        width: 99.5%; /*헤더 완성되면 border 제거 후 width:100%로 맞추기*/
        margin: 10px auto;
        border: 1px dashed green;
        background-color: lightyellow;
    };

    img{
    width : 100%;
    height : 100%;
    min-width : 50%;
    min-height : 50%;
    }

` 

export default GlobalStyles;
