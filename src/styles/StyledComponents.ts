import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Page wrapper
export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #2a3d45 0%,
    #5c5552 30%,
    #7a6c5d 60%,
    #2a3d45 100%
  );
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  overflow-y: auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

// Header styled components
export const StyledHeader = styled.header`
  background-color: transparent;
  color: #decbb7;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  flex-shrink: 0;
  text-align: left;

  @media screen and (max-width: 750px) {
    text-align: left;
  }
`

export const HeaderTitle = styled.h1`
  color: #decbb7;
`;

export const HeaderSubtitle = styled.p`
  color: #decbb7;
`;


// Nav styled components
export const StyledNav = styled.nav`
  background-color: transparent;
  color: #decbb7;
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 1rem;
  height: auto;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
    padding: 0.5rem;
    flex-direction: row;
    justify-content: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
`;

export const NavItem = styled.h1`
  flex: 0 0 auto;

  @media screen and (max-width: 1000px) {
    flex: 1 1 auto;
    min-width: 100px;
    display: flex;
    justify-content: center;
  }
`

export const NavLink = styled(Link)`
  width: 100%;
  text-align: center;
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  color: #1b2021;
  background-color: transparent;
  border: 2px solid #decbb7;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover,
  &:focus {
    background-color: #626c66;
    color: #decbb7;
    border-color: #e1ca96;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0.5rem 0.75rem;
  }
`;

// Main styled components
export const StyledMain = styled.main`
  background-color: transparent;
  color: #1b2021;
  width: 70%;
  padding: 0 3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0.8rem + 0.5vw);

  @media screen and (min-width: 1000px) {
    width: 70%;
    max-width: 70%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

// Footer Styled Components
export const StyledFooter = styled.footer`
  background-color: transparent;
  color: #decbb7;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  flex-shrink: 0;
  text-align: left;
`;

export const FooterLink = styled(Link)`
  color: #decbb7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Common components
export const IntroList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  text-align: left;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    padding-left: 1.5rem;
  }
`;

export const IntroListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;

  &::before {
    content: "•";
    color: #2a3d45;
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -0.4rem;
  }

  @media screen and (max-width: 1000px) {
    &::before {
      position: absolute;
      left: 0;
      top: -0.4rem;
    }
  }
`;

export const MainImage = styled.img`
  max-width: 60%;
  height: auto;
  display: block;
  margin: 0 auto 2rem;
`;


