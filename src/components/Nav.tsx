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
