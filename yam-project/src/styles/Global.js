import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, p {
        margin: 0;
    }

`;
