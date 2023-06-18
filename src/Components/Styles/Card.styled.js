import { styled } from "styled-components";

export const StyledCard = styled.div`
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 60px;
    border-radius: 20px;
    display: flex;
    flex-direction: ${({reverse}) => reverse};
    margin: 40px 0;

    img{
        width: 90%
    }

    div{
        flex: 1
    }

    @media (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column
    }
`