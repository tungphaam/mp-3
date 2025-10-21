import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useCalculator } from '../hooks/useCalculator';

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
    <div id="page-wrapper">
      <Header title="Projects" />
      
      <div id="container">
        <Nav />
        <Main>
          <div className="projects">
            <div className="project" id="project0">
              <h3>Boston Budget Analysis Project</h3>
              <p>
                This project analyzes and predicts the City of Boston's budget 
                allocations using data processing, clustering, and an ensemble machine 
                learning model to provide actionable insights into spending trends, 
                priorities, and efficiency.
              </p>
              <a 
                href="https://github.com/tungphaam/cs506-final-project.git" 
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
            
            <div className="project" id="project1">
              <h3>KPIM Biking Project</h3>
              <p>
                This project uses Excel to analyze KPIM Biking Corporation's sales data, 
                creating a dynamic dashboard with charts and tables to provide the sales 
                team with key insights into monthly revenue, customer types, product 
                performance, and promotion impact.
              </p>
              <a 
                href="https://github.com/tungphaam/KPIM-Biking-Project.git" 
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
            
            <div className="project" id="project2">
              <h3>Vietinbank Project</h3>
              <p>
                This project focused on enhancing the efficiency and accuracy of 
                financial reporting for the Department of Planning and Financial 
                Management.
              </p>
              <a 
                href="https://github.com/tungphaam/Vietinbank-Project.git" 
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
          </div>
          
          <section id="calculator-wrapper">
            <h2>Quick Calculator</h2>
            <div className="calculator">
              <div className="calc-inputs">
                <input 
                  type="number" 
                  value={firstNumber}
                  onChange={(e) => setFirstNumber(e.target.value)}
                  placeholder="First number"
                />
                <input 
                  type="number" 
                  value={secondNumber}
                  onChange={(e) => setSecondNumber(e.target.value)}
                  placeholder="Second number"
                />
              </div>
              
              <div className="calc-buttons">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>×</button>
                <button onClick={divide}>÷</button>
                <button onClick={power}>xʸ</button>
                <button onClick={clear} className="clear-btn">Clear</button>
              </div>
              
              <h3 
                id="output" 
                className={isNegative ? 'negative' : ''}
              >
                {result}
              </h3>
            </div>
          </section>
        </Main>
      </div>
      
      <Footer />
    </div>
  );
}

export default Projects;
