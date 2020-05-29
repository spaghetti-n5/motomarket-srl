import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
    z-index: 4;
    background-color: white;
    padding: 20px 0;
    grid-column: 1 / span 12;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;

    opacity: 1;

    /*transition: all 0.3s ease;
    //visibility: visible;*/
        

    /*${({ visible }) => visible
        && css`
        visibility: hidden;
        transition: all 0.3s ease;
        transform: translate(0, 100%);

    `}*/
`;

export const HeaderLogo = styled.a``;