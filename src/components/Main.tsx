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
