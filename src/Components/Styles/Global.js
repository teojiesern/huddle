import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    margin: 0;
    background-color: ${({theme}) => theme.colors.body}
}

`