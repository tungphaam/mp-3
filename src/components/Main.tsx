/**
 * Main content
 *
 * Generic wrapper component for main content area
 * Can accept custom className for page-specific styling.
 * Exported for reuse in pages that don't need specialized main components.
*/

import { StyledMain } from "../styles/StyledComponents";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

function Main({ children, className }: MainProps) {
  return <StyledMain className={className}>{children}</StyledMain>;
}

export default Main;
export { StyledMain };
