import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import buLogo from '../assets/bu.png';

function Education() {
  return (
    <div id="page-wrapper" className="edu-page">
      <Header title="Education" subtitle="Major | Projects" />
      
      <div id="container">
        <Nav />
        <Main className="edu-main">
          <section className="edu-info">
            <img src={buLogo} alt="school logo" className="sec-image" />
            <h2>Boston University</h2>
            <p>College of Art and Science</p>
            <p>Major: Computer Science</p>
            <p>2021 &nbsp;&nbsp;&mdash;&nbsp;&nbsp; 2025</p>
          </section>
          
          <section className="projects">
            <h2>Technical Projects</h2>
            
            <h3>Boston Budget Analysis Project</h3>
            <div className="edu-details">
              <h4>Data Analyst</h4>
              <span className="line"></span>
              <h4>Nov 2024 - Dec 2024</h4>
            </div>
            <ul>
              <li>
                Analyzed Boston's operating and capital budgets using Python and SQL, 
                identifying spending trends, forecasting budget growth, and evaluating 
                per capita expenditures across city departments.
              </li>
              <li>
                Developed predictive models with Random Forest and Gradient Boosting, 
                achieving a 93.3% R² score in budget forecasting through feature 
                engineering and hyperparameter optimization.
              </li>
              <li>
                Applied clustering techniques to classify budget allocations, leveraging 
                k-means and data visualization to identify spending priorities and 
                funding patterns.
              </li>
            </ul>
            
            <h3>Bike Ride Forecast Project</h3>
            <div className="edu-details">
              <h4>Data Analyst</h4>
              <span className="line"></span>
              <h4>Jun 2024 - Aug 2024</h4>
            </div>
            <ul>
              <li>
                Analyzed and cleansed a dataset of 100,000 ride requests using Pandas 
                and SQL, eliminating fraudulent entries and reducing data size by 15%.
              </li>
              <li>
                Engineered features with Scikit-Learn and Numpy, utilizing time-based 
                and spatial aggregations to boost model accuracy by 20%.
              </li>
              <li>
                Deployed a predictive model with XGBoost and TensorFlow, achieving an 
                85% accuracy rate in forecasting ride demand for specified time windows.
              </li>
            </ul>
            
            <h3>Exploring Student Housing Preferences: A Statistical Analysis</h3>
            <div className="edu-details">
              <h4>Data Analyst</h4>
              <span className="line"></span>
              <h4>March 2024 - May 2024</h4>
            </div>
            <ul>
              <li>
                Designed and conducted a survey to analyze BU student housing preferences, 
                using R for statistical tests like t-tests, confidence intervals, and 
                correlation analysis.
              </li>
              <li>
                Explored relationships between housing budget, distance from campus, and 
                accommodation choices, applying techniques like homoscedasticity and 
                homogeneity tests, and compiled insights into reports.
              </li>
            </ul>
          </section>
        </Main>
      </div>
      
      <Footer />
    </div>
  );
}

export default Education;
