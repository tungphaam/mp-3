import styled from 'styled-components';

export const ProjectsMain = styled.main`
  background-color: transparent;
  color: #1b2021;
  width: 70%;
  padding: 2rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(0.8rem + 0.5vw);

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
`;

export const Project = styled.div`
  background: #decbb7;
  border: 1px solid #5c5552;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    color: #2a3d45;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    color: #1b2021;
  }
`;

export const GithubLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2a3d45;
  border: 1px solid #decbb7;
  color: #decbb7;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #626c66;
    color: #decbb7;
  }
`;

// Calculator Styles
export const CalculatorWrapper = styled.section`
  width: 100%;

  h2 {
    color: #decbb7;
    margin-top: 0.2rem;
  }
`;

export const Calculator = styled.div`
  width: 95%;
  max-width: 400px;
  margin: 0.5rem auto 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #2a3d45;
  box-sizing: border-box;

  @media (max-width: 400px) {
    padding: 0.5rem;
    gap: 0.25rem;
  }
`;

export const CalcInputs = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CalcInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
  min-width: 0;

  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

export const CalcButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media (max-width: 400px) {
    gap: 0.25rem;
  }
`;

export const CalcButton = styled.button`
  flex: 1 1 30%;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: #626c66;
    color: #decbb7;
    border: 1px solid #e1ca96;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

export const ClearButton = styled(CalcButton)`
  color: #bc6c25;
  font-weight: bold;
  background-color: #2a3d45;
  border: 2px solid #decbb7;
  border-radius: 6px;

  &:hover,
  &:focus {
    color: #bc6c25;
  }
`;

export const Output = styled.h3<{ $isNegative?: boolean }>`
  text-align: center;
  font-size: 1.2rem;
  min-height: 1.5rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #decbb7;
  color: ${props => props.$isNegative ? 'red' : '#decbb7'};
  font-weight: ${props => props.$isNegative ? 'bold' : 'normal'};
`;
