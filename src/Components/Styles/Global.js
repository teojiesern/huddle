import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        background-color: ${({theme}) => theme.colors.body}
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

`