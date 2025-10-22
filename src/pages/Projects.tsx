/*
 * Projects page
 *
 * Shows project portfolio with github links and interactive calculator
 * projects section: lists technical projects with description
 * calculator section: functional calculator using custom useCalculator hook
*/


import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useCalculator } from '../hooks/useCalculator';
import { PageWrapper, Container } from '../styles/StyledComponents';
import { 
  ProjectsMain, 
  ProjectsContainer, 
  Project, 
  GithubLink,
  CalculatorWrapper,
  Calculator,
  CalcInputs,
  CalcInput,
  CalcButtons,
  CalcButton,
  ClearButton,
  Output
} from '../styles/ProjectsStyles';

function Projects() {
  const {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    result,
    isNegative,
    add,
    subtract,
    multiply,
    divide,
    power,
    clear,
  } = useCalculator();

  return (
    <PageWrapper>
      <Header title="Projects" />
      
      <Container>
        <Nav />
        <ProjectsMain>
          <ProjectsContainer>
            <Project>
              <h3>Boston Budget Analysis Project</h3>
              <p>
                This project analyzes and predicts the City of Boston's budget 
                allocations using data processing, clustering, and an ensemble machine 
                learning model to provide actionable insights into spending trends, 
                priorities, and efficiency.
              </p>
              <GithubLink 
                href="https://github.com/tungphaam/cs506-final-project.git" 
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </GithubLink>
            </Project>
            
            <Project>
              <h3>KPIM Biking Project</h3>
              <p>
                This project uses Excel to analyze KPIM Biking Corporation's sales data, 
                creating a dynamic dashboard with charts and tables to provide the sales 
                team with key insights into monthly revenue, customer types, product 
                performance, and promotion impact.
              </p>
              <GithubLink 
                href="https://github.com/tungphaam/KPIM-Biking-Project.git" 
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </GithubLink>
            </Project>
            
            <Project>
              <h3>Vietinbank Project</h3>
              <p>
                This project focused on enhancing the efficiency and accuracy of 
                financial reporting for the Department of Planning and Financial 
                Management.
              </p>
              <GithubLink 
                href="https://github.com/tungphaam/Vietinbank-Project.git" 
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </GithubLink>
            </Project>
          </ProjectsContainer>
          
          <CalculatorWrapper>
            <h2>Quick Calculator</h2>
            <Calculator>
              <CalcInputs>
                <CalcInput
                  type="number" 
                  value={firstNumber}
                  onChange={(e) => setFirstNumber(e.target.value)}
                  placeholder="First number"
                />
                <CalcInput
                  type="number" 
                  value={secondNumber}
                  onChange={(e) => setSecondNumber(e.target.value)}
                  placeholder="Second number"
                />
              </CalcInputs>
              
              <CalcButtons>
                <CalcButton onClick={add}>+</CalcButton>
                <CalcButton onClick={subtract}>-</CalcButton>
                <CalcButton onClick={multiply}>×</CalcButton>
                <CalcButton onClick={divide}>÷</CalcButton>
                <CalcButton onClick={power}>xʸ</CalcButton>
                <ClearButton onClick={clear}>Clear</ClearButton>
              </CalcButtons>
              
              <Output $isNegative={isNegative}>
                {result}
              </Output>
            </Calculator>
          </CalculatorWrapper>
        </ProjectsMain>
      </Container>
      
      <Footer />
    </PageWrapper>
  );
}

export default Projects;
