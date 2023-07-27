import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 100px;
  color: #ffffff;
  background-color: #0c0d0fed;
  backdrop-filter: grayscale(100%);
  @media screen and (min-width: 320px) {
    flex-direction: row;
  }
`;
