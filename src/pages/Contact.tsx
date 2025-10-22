import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { PageWrapper, Container } from '../styles/StyledComponents';
import { ContactMain } from '../styles/ContactStyles';

function Contact() {
  return (
    <PageWrapper>
      <Header title="Contact" />
      
      <Container>
        <Nav />
        <ContactMain>
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
        </ContactMain>
      </Container>
      
      <Footer />
    </PageWrapper>
  );
}

export default Contact;
