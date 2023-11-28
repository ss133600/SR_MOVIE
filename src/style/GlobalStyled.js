import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        background-color: ${mainColors.blackColor};
        color: white;
        letter-spacing: -1px;
        word-break: break-all;
        font-family: "Noto Sans KR", sans-serif;
    }

    ul, li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: "white";
    }
`;
