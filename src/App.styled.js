import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & main {
    flex: 1;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: grayscale(100%);
  }
`;
