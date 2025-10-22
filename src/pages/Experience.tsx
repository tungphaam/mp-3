/*
 * Experience page
 *
 * Displays professional work experience and internships.
 * lists companies, roles, dates, and key responsibilities/achievements
 * for each position.
*/


import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { PageWrapper, Container, IntroList, IntroListItem } from '../styles/StyledComponents';
import { ExpMain, JobDetails, JobLine } from '../styles/ExperienceStyles';

function Experience() {
  return (
    <PageWrapper>
      <Header title="Experience" subtitle="Professional Experience | Internships" />
      
      <Container>
        <Nav />
        <ExpMain>
          <h2>Professional Experience</h2>
          
          <h3>Techcom Securities</h3>
          <JobDetails>
            <h4>Data Analyst Intern</h4>
            <JobLine />
            <h4>Jun 2024 - Aug 2024</h4>
          </JobDetails>
          <IntroList>
            <IntroListItem>
              Conducted in-depth analysis of monthly bond performance metrics on the 
              iConnect platform using DBeaver for efficient database management by 
              migrating the iBond reporting system from PostgreSQL to Amazon Redshift, 
              effectively managing a 50% increase in data volume and enabling more 
              complex analytical queries.
            </IntroListItem>
            <IntroListItem>
              Updated adjusted closing prices for stock portfolios, demonstrating that 
              customers who adhered to recommended strategies saw an average portfolio 
              performance improvement of 3% over six weeks.
            </IntroListItem>
            <IntroListItem>
              Enhanced collaboration and problem-solving skills by partnering with the 
              Data Engineering Team to ensure data consistency and accuracy through the 
              SIT-UAT-PROD process.
            </IntroListItem>
          </IntroList>
          
          <h3>VietinBank</h3>
          <JobDetails>
            <h4>Data Analyst Intern</h4>
            <JobLine />
            <h4>Jun 2023 - Aug 2023</h4>
          </JobDetails>
          <IntroList>
            <IntroListItem>
              Established 4 dynamic reports and dashboards using Power BI, SQL, and R, 
              which streamlined access to and analysis of deposit account balances for 
              the Department of Planning and Financial Management, reducing data 
              interpretation time by 30%.
            </IntroListItem>
            <IntroListItem>
              Traced and resolved discrepancies in CASA balances between the teller 
              channel and the EFAST channel, leading to a 15% improvement in channel 
              balance alignment and enhancing the accuracy of financial reporting.
            </IntroListItem>
            <IntroListItem>
              Improved the efficiency and accuracy of data analysis processes through 
              expertise in Data Cleaning and Preprocessing, Statistical Analysis, and 
              Data Visualization.
            </IntroListItem>
          </IntroList>
        </ExpMain>
      </Container>
      
      <Footer />
    </PageWrapper>
  );
}

export default Experience;
