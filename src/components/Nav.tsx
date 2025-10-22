/**
 * Navigation Component
 * 
 * Reusable navigation menu with React Router links.
 * Displays vertically on desktop and horizontally on mobile.
 * Used across all pages to provide consistent navigation.
*/

import { StyledNav, NavLink, NavItem, NavList } from '../styles/StyledComponents';

function Nav() {
  return (
    <StyledNav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/education">Education</NavLink></NavItem>
        <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
        <NavItem><NavLink to="/achievements">Achievements</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
      </NavList>
    </StyledNav>
  );
}

export default Nav;
