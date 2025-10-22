/*
 * Home page
 *
 * Landing page with profile image and introduction.
 * Displays personal statement and contact information.
*/


import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { PageWrapper, Container, MainImage, IntroList, IntroListItem } from '../styles/StyledComponents';
import profileImg from '../assets/img.png';

function Home() {
  return (
    <PageWrapper>
      <Header title="Tung Pham" subtitle='Data Analyst | Computer Science Student'/>
      
      <Container>
        <Nav />
        <Main>
          <MainImage src={profileImg} alt="My pic" />
          <IntroList>
            <IntroListItem>
              I'm a senior at Boston University pursuing a Bachelor's degree in Computer Science. 
              My interests lie at the intersection of media and technology — where one uses code to 
              create, innovate, and enhance how stories are told and experiences are shared.
            </IntroListItem>
            <IntroListItem>
              As a curious and enthusiastic college student, I thrive on exploring new ideas and 
              challenging my perception of the world. I'm passionate about leveraging technology to 
              express creativity, transform thoughts, and gain deeper insights into the evolving 
              digital landscape.
            </IntroListItem>
            <IntroListItem>
              Feel free to reach out to me at tungpham@bu.edu!
            </IntroListItem>
          </IntroList>
        </Main>
      </Container>
      
      <Footer />
    </PageWrapper>
  );
}

export default Home;
