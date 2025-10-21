import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import profileImg from '../assets/img.png';

function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      
      <div id="container">
        <Nav />
        <Main>
          <img src={profileImg} alt="My pic" className="main-image" />
          <ul className="intro-list">
            <li>
              I'm a senior at Boston University pursuing a Bachelor's degree in Computer Science. 
              My interests lie at the intersection of media and technology — where one uses code to 
              create, innovate, and enhance how stories are told and experiences are shared.
            </li>
            <li>
              As a curious and enthusiastic college student, I thrive on exploring new ideas and 
              challenging my perception of the world. I'm passionate about leveraging technology to 
              express creativity, transform thoughts, and gain deeper insights into the evolving 
              digital landscape.
            </li>
            <li>
              Feel free to reach out to me at tungpham@bu.edu!
            </li>
          </ul>
        </Main>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
