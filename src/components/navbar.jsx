import { useBlogContext } from "../context/blogContext";

const NavBar = () => {
    const { isLightTheme, toggleTheme } = useBlogContext();
    return (
        <NavBarContainer>
            <NavBarHeading>Blog</NavBarHeading>
            <NavBarOptionsBgContainer>
                <NavBarToggleThemeContainer onClick={toggleTheme}>
                    {isLightTheme ? <DarkModeIcon /> : <LightModeIcon />}
                </NavBarToggleThemeContainer>
            </NavBarOptionsBgContainer>
        </NavBarContainer>
    );
};

export default NavBar;

// component styles

import styled, { keyframes } from "styled-components";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const NavBarContainer = styled.nav`
    box-shadow: 0px 2px 3px 1px grey;
    padding: clamp(0.2em, 1vw + 0.7em, 1em) clamp(1em, 1vw + 0.7em, 3em);
    --fs-logo: clamp(1rem, 1vw + 1.8rem, 2.7rem);
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.33rem, 1.8rem);
    top: 0;
    position: sticky;
    z-index: 999;
    background-color: var(--theme-header-bg-color);
    min-height: 2.5rem;
    display: flex;
    justify-content: space-between;
    color: var(--theme-primary-text-color);
`;

const NavBarHeading = styled.h1``;

const NavBarOptionsBgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 clamp(0.1em, 1vw + 0.1rem, 1rem);
`;

export const RotateThemeIcon = keyframes`
from {
    rotate: 54deg;
}
to {
    rotate: -5deg;
}
`;
export const DarkModeIcon = styled(BsMoonFill)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${RotateThemeIcon} 0.3s linear forwards;
`;
export const LightModeIcon = styled(BsFillSunFill)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${RotateThemeIcon} 0.3s linear forwards reverse 1;
`;

const NavBarToggleThemeContainer = styled.div``;
