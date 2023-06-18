import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${({theme}) => theme.colors.footer};
    padding: 50px 0;

    ul{
        list-style-type: none;
        color: white;

        li{
            margin: 5px 0
        }
    }

    p {
        color: white;
        text-align: right
    }

    @media (max-width: ${({theme}) => theme.mobile}){
        text-align: center;
        p{
            text-align: center;
        }
        ul{
            padding: 0;
        }
    }
`