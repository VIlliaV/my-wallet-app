import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #0c0d0fed;
  backdrop-filter: grayscale(100%);
  @media screen and (max-width: 320px) {
    font-size: 8px;
  }
`;
