import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, html, body {
        margin:0px;
        padding: 0px;
        font-family: "";
        overflow-x:hidden;
    }
    body {
        background: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
    }
    
    .f-s-1.5em {
        font-size: 1.5em;
    }
    .m-10 {
        margin: 10px;
    }
    .m-t-10 {
        margin-top:10px !important;
    }

    .m-b-10 {
        margin-bottom:10px !important;
    }

    .m-t-20 {
        margin-top:20px !important;
    }
    .p-10 {
        padding: 10px;
    }
    .p-5 {
        padding: 5px;
    }
    .p-r-10 {
        padding-right: 10px;
    }
    .p-l-10 {
        padding-right: 10px;
    }

    .p-b-20 {
        padding-bottom: 20px;
    }

    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        background-color: ${props => props.theme.colors.black};
        background-image: url(./assests/images/bars.svg);
        background-repeat: no-repeat;
        background-position: center;
    }

    #preloader-none {
        opacity: 0;
    }
`;