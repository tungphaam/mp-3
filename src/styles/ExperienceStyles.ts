/*
 * Experience page styles
 *
 * includes styles for job listings and timeline formatting
*/

import styled from 'styled-components';

export const ExpMain = styled.main`
  background-color: transparent;
  color: #1b2021;
  width: 70%;
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: calc(0.8rem + 0.5vw);
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 1rem;
    max-width: 100%;
  }
`;

export const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const JobLine = styled.span`
  flex-grow: 1;
  border-bottom: 1px dashed #1b2021;
  margin: 0 10px;
`;
