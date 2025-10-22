import Header from '../components/Header';
import Nav from '../components/Nav';
import { PageWrapper, Container, IntroList, IntroListItem } from '../styles/StyledComponents';
import Footer from '../components/Footer';
import { AchievementsMain } from '../styles/AchievementsStyles';

function Achievements() {
  return (
    <PageWrapper>
      <Header title="Achievements" subtitle="Learning | Certifications" />
      
      <Container>
        <Nav />
        <AchievementsMain>
          <section>
            <h2>Dean's List</h2>
            <IntroList>
              <IntroListItem>Fall 2022</IntroListItem>
              <IntroListItem>Spring 2025</IntroListItem>
            </IntroList>
          </section>
          
          <section>
            <h2>Achievements in Competitions / Learning</h2>
            <IntroList>
              <IntroListItem>
                Achieved top 5% in a Kaggle competition predicting housing prices using 
                regression and feature engineering.
              </IntroListItem>
              <IntroListItem>
                Published a Medium article explaining machine learning model explainability 
                techniques using SHAP and LIME.
              </IntroListItem>
              <IntroListItem>
                Completed a capstone project forecasting stock prices using LSTM neural 
                networks with historical and alternative data.
              </IntroListItem>
            </IntroList>
          </section>
          
          <section>
            <h2>Certifications</h2>
            <IntroList>
              <IntroListItem>
                Google Data Analytics Professional Certificate – Completed coursework in SQL, 
                data visualization, and data cleaning.
              </IntroListItem>
              <IntroListItem>
                DeepLearning.AI TensorFlow Developer Certificate – Built neural networks and 
                deep learning models using TensorFlow.
              </IntroListItem>
            </IntroList>
          </section>
        </AchievementsMain>
      </Container>
      
      <Footer />
    </PageWrapper>
  );
}

export default Achievements;
