import { styled } from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${({bg}) => bg || 'white'};
    color: ${({color}) => color || '#333'};
    padding: 15px 60px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`