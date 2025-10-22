/**
 * Header Component
 * 
 * Reusable header component that displays a title and optional subtitle.
 * Used across all pages with different content via props.
 * 
 * Props:
 * - title: Main heading text (required)
 * - subtitle: Secondary text below title (optional)
 */

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
