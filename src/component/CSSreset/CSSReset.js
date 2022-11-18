import { createGlobalStyle } from "styled-components";

const CSSreset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: hsl(218, 23%, 16%);
        font-family: "Manrope";
        font-weight: 800;
        font-size: 1.6rem;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
`;

export default CSSreset;
