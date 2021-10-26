import { createGlobalStyle } from 'styled-components';

import { grey50 } from 'common/colors';

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        min-height: 100%;

        margin: 0;
        padding: 0;

        overflow-y: scroll;

        background-color: ${grey50};

        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    * {
        box-sizing: border-box;

        outline: none;

        font-family: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;

        font-weight: normal;
        font-style: normal;
    }

    input, textarea {
        margin: 0;
        padding: 0;

        appearance: none;
    }

    input[type='button'], button {
        margin: 0;
        padding: 0;

        font: inherit;

        background: transparent;
        border: none;
        box-shadow: none;
    }

    input[type='text'] {
        border: none;
    }
`;

export default GlobalStyle;
