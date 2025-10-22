/*
 * Education page
 *
 * displays educational background and technical projects.
 * includes Boston University info and detailed project descriptions
 * with roles, dates, and accomplishments.
*/

import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { PageWrapper, Container, IntroList, IntroListItem } from '../styles/StyledComponents';
import { EduMain, SecImage, EduInfo, EduDetails, Line } from '../styles/EducationStyles';
import buLogo from '../assets/bu.png';

function Education() {
  return (
    <PageWrapper>
      <Header title="Education" subtitle="Major | Projects" />
      
      <Container>
        <Nav />
        <EduMain>
          <EduInfo>
            <SecImage src={buLogo} alt="school logo" />
            <h2>Boston University</h2>
            <p>College of Art and Science</p>
            <p>Major: Computer Science</p>
            <p>2021 &nbsp;&nbsp;&mdash;&nbsp;&nbsp; 2025</p>
          </EduInfo>
          
          <section>
            <h2>Technical Projects</h2>
            
            <h3>Boston Budget Analysis Project</h3>
            <EduDetails>
              <h4>Data Analyst</h4>
              <Line />
              <h4>Nov 2024 - Dec 2024</h4>
            </EduDetails>
            <IntroList>
              <IntroListItem>
                Analyzed Boston's operating and capital budgets using Python and SQL, 
                identifying spending trends, forecasting budget growth, and evaluating 
                per capita expenditures across city departments.
              </IntroListItem>
              <IntroListItem>
                Developed predictive models with Random Forest and Gradient Boosting, 
                achieving a 93.3% R² score in budget forecasting through feature 
                engineering and hyperparameter optimization.
              </IntroListItem>
              <IntroListItem>
                Applied clustering techniques to classify budget allocations, leveraging 
                k-means and data visualization to identify spending priorities and 
                funding patterns.
              </IntroListItem>
            </IntroList>
            
            <h3>Bike Ride Forecast Project</h3>
            <EduDetails>
              <h4>Data Analyst</h4>
              <Line />
              <h4>Jun 2024 - Aug 2024</h4>
            </EduDetails>
            <IntroList>
              <IntroListItem>
                Analyzed and cleansed a dataset of 100,000 ride requests using Pandas 
                and SQL, eliminating fraudulent entries and reducing data size by 15%.
              </IntroListItem>
              <IntroListItem>
                Engineered features with Scikit-Learn and Numpy, utilizing time-based 
                and spatial aggregations to boost model accuracy by 20%.
              </IntroListItem>
              <IntroListItem>
                Deployed a predictive model with XGBoost and TensorFlow, achieving an 
                85% accuracy rate in forecasting ride demand for specified time windows.
              </IntroListItem>
            </IntroList>
            
            <h3>Exploring Student Housing Preferences: A Statistical Analysis</h3>
            <EduDetails>
              <h4>Data Analyst</h4>
              <Line />
              <h4>March 2024 - May 2024</h4>
            </EduDetails>
            <IntroList>
              <IntroListItem>
                Designed and conducted a survey to analyze BU student housing preferences, 
                using R for statistical tests like t-tests, confidence intervals, and 
                correlation analysis.
              </IntroListItem>
              <IntroListItem>
                Explored relationships between housing budget, distance from campus, and 
                accommodation choices, applying techniques like homoscedasticity and 
                homogeneity tests, and compiled insights into reports.
              </IntroListItem>
            </IntroList>
          </section>
        </EduMain>
      </Container>
      
      <Footer />
    </PageWrapper>
  );
}

export default Education;
