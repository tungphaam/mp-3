import { StyledHeader, HeaderTitle, HeaderSubtitle } from "../styles/StyledComponents";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <StyledHeader>
      <HeaderTitle>{title}</HeaderTitle>
      {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
    </StyledHeader>
  );
}

export default Header;
