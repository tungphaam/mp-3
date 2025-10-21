import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Achievements() {
  return (
    <div id="page-wrapper" className="achievements-page">
      <header>
        <h1>Achievements</h1>
        <p>Learning | Certifications</p>
      </header>
      
      <div id="container">
        <Nav />
        <Main>
          {/* Dean's List */}
          <section className="acm-section">
            <h2>Dean's List</h2>
            <ul className="intro-list">
              <li>Fall 2022</li>
              <li>Spring 2025</li>
            </ul>
          </section>
          
          {/* Competitions / Learning */}
          <section className="acm-section">
            <h2>Achievements in Competitions / Learning</h2>
            <ul className="intro-list">
              <li>
                Achieved top 5% in a Kaggle competition predicting housing prices using 
                regression and feature engineering.
              </li>
              <li>
                Published a Medium article explaining machine learning model explainability 
                techniques using SHAP and LIME.
              </li>
              <li>
                Completed a capstone project forecasting stock prices using LSTM neural 
                networks with historical and alternative data.
              </li>
            </ul>
          </section>
          
          {/* Certifications */}
          <section className="achievement-section">
            <h2>Certifications</h2>
            <ul className="intro-list">
              <li>
                Google Data Analytics Professional Certificate – Completed coursework in SQL, 
                data visualization, and data cleaning.
              </li>
              <li>
                DeepLearning.AI TensorFlow Developer Certificate – Built neural networks and 
                deep learning models using TensorFlow.
              </li>
            </ul>
          </section>
        </Main>
      </div>
      
      <Footer />
    </div>
  );
}

export default Achievements;
