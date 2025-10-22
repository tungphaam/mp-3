/*
 * Contact page styles
 *
 * Styled components specific to the Contact page.
*/

import styled from 'styled-components';

export const ContactMain = styled.main`
  background-color: transparent;
  color: #1b2021;
  width: 70%;
  padding: 0 3rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: calc(0.8rem + 0.5vw);
  gap: 0.5rem;

  a {
    word-break: break-word;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;

    a {
      display: inline-block;
      text-align: center;
    }
  }
`;
