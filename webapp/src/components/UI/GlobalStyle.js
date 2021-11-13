import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: black;
    }
`;