import styled from 'styled-components';

export const AchievementsMain = styled.main`
  background-color: transparent;
  color: #1b2021;
  width: 70%;
  padding: 10vh 3rem 0 3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(0.8rem + 0.5vw);
  box-sizing: border-box;

  section {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
  }
`;
