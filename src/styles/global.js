import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --color-background: #F2F2F2;
        --color-white-0: #FFFFFF;
        --color-white-1: #DDE6E9;
        --color-white-2: #D1ECE3;
        --color-blue-0: #66AFE9;
        --color-blue-1: #5D9CEC;
        --color-blue-2: #3D75BB;
        --color-gray-0: #656565;
        --color-gray-1: #CECECE;
        --color-error-message: #DA1E28
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: 'Source Sans Pro', sans-serif;
    }

    body{
        background-color: var(--color-background);
    }

    button{
        border: none;
        background: none;

        cursor: pointer;
    }

`;
