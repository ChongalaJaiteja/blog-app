import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    /*Define global CSS variables here*/
    --total-page-pd-sm : clamp(0.5em, 1vw + 1.44em, 2.5em);
    --total-page-pd-md : clamp(0.6em, 1vw + 1.8em, 3em);
    --total-page-pd-lg : clamp(0.7em, 1vw + 3.9em, 6em);
    --page-section-pt : clamp(1.4em, 1vw + 5.7em, 8em);
    --page-section-pb : clamp(1.4em, 1vw + 2.5em, 6em);
    
    --theme-page-bg-color:${(props) => props.theme.backgroundColor};
    --theme-container-bg-color:${(props) => props.theme.containerBackground};
    --theme-header-bg-color:${(props) => props.theme.headerBackground};
    --theme-primary-text-color:${(props) => props.theme.primaryText};
    --theme-second-text-color:${(props) => props.theme.secondText};
    --theme-header-text-color:${(props) => props.theme.headerText};
    --theme-border-color:${(props) => props.theme.borderColor};
    --theme-divide-line-color:${(props) => props.theme.divideLineColor};
    --theme-input-bg-color:${(props) => props.theme.inputBackgroundColor};
    --theme-input-text-color:${(props) => props.theme.inputText};
    --theme-input-border-color: ${(props) => props.theme.inputBorderColor};
    --theme-input-placeholder-text-color: ${(props) =>
        props.theme.placeholderText};
    --theme-primary-color:${(props) => props.theme.primaryAccentColor};
    --theme-secondary-color:${(props) => props.theme.secondaryAccentColor};
    --theme-success-color:${(props) => props.theme.successAccentColor};
    --theme-warning-color:${(props) => props.theme.warningAccentColor};
    --theme-info-color:${(props) => props.theme.infoAccentColor};
    --theme-link-color : ${(props) => props.theme.linkColor};
    --toggle-theme-transition : background-color 0.4s ease-out;
}

/*Defining global CSS*/
html {
        -webkit-tap-highlight-color: transparent !important;
    }
body {
    box-sizing:border-box;
    font-family: "Lato", sans-serif;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* WebKit (Chrome and Safari) */
::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#b0b0b0" : "#555"};
    border-radius: 13px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#999" : "#777"};
}

::-webkit-scrollbar-track {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#f0f0f0" : "#333"};
}

/* Mozilla (Firefox) */

::-moz-scrollbar {
    width: 7px;
}

::-moz-scrollbar-thumb {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#b0b0b0" : "#555"};
    border-radius: 13px;
}

::-moz-scrollbar-thumb:hover {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#999" : "#777"};
}

::-moz-scrollbar-track {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#f0f0f0" : "#333"};
}

/* Microsoft (Internet Explorer and Edge) */
::-ms-scrollbar {
    width: 7px;
}

::-ms-scrollbar-thumb {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#b0b0b0" : "#555"};
    border-radius: 13px;
}

::-ms-scrollbar-thumb:hover {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#999" : "#777"};
}

::-ms-scrollbar-track {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#f0f0f0" : "#333"};
}

/* Opera */
::-o-scrollbar {
    width: 7px;
}

/* Handle */
::-o-scrollbar-thumb {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#b0b0b0" : "#555"};
    border-radius: 13px;
}

/* Handle on hover */
::-o-scrollbar-thumb:hover {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#999" : "#777"};
}

/* Track */
::-o-scrollbar-track {
    background-color: ${(props) =>
        props.theme.isLightTheme ? "#f0f0f0" : "#333"};
}

`;
