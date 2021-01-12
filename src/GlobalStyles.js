import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
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


` 

export default GlobalStyle;