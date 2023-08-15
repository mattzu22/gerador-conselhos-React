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
        font-family: "Manrope";
        font-weight: 800;
        font-size: 1.6rem;
    }
`;

export default CSSreset;
