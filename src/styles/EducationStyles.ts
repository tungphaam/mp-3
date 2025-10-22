import styled from 'styled-components';

export const EduMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 0 2rem;
  background-color: transparent;
  color: #1b2021;
  width: 70%;
  padding: 0 3rem;
  flex-grow: 1;
  font-size: calc(0.8rem + 0.5vw);

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const SecImage = styled.img`
  max-width: 200px;
  margin-bottom: 1rem;
`;

export const EduInfo = styled.section`
  margin-bottom: 2rem;
`;

export const EduDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Line = styled.span`
  flex-grow: 1;
  border-bottom: 1px dashed #1b2021;
  margin: 0 10px;
`;
