import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 25px 0;
        font-family: 'Roboto Mono', monospace;
        text-align: center;
        font-weight: 300;
        line-height: 1.5;
    }

    * {
        margin: 0;
        box-sizing: border-box;
    }
`;