import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div id="page-wrapper" className="contact-page">
      <Header title="Contact" subtitle="" />
      
      <div id="container">
        <Nav />
        <Main>
          <h2>Email</h2>
          <p>personal - simonpham2003@gmail.com</p>
          <p>school - tungpham@bu.edu</p>
          
          <h2>LinkedIn</h2>
          <p>
            LinkedIn:{' '}
            <a 
              href="https://linkedin.com/in/tungduongpham/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/tungduongpham/
            </a>
          </p>
        </Main>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;
