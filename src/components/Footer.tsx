import { StyledFooter, FooterLink } from "../styles/StyledComponents";

function Footer() {
  return (
    <StyledFooter>
      <p>
        &#169; 2025 Tung Pham. All rights reserved.{' '}
        <FooterLink to="/source">Credits</FooterLink>
      </p>
    </StyledFooter>
  );
}

export default Footer;
