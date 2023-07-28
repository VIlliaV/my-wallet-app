import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 45px;
  padding: 5px;
  font-size: 24px;
  color: var(--primary);
  font-family: 'Kanit', sans-serif;
  & ::placeholder {
    color: rgb(221, 218, 218);
  }

  & form {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 24px;
    }

    & label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      & input {
        max-width: 200px;
        @media screen and (min-width: 768px) {
          max-width: 400px;
        }

        @media screen and (min-width: 1200px) {
          max-width: 500px;
        }
        padding: 1px 10px;
        background-color: transparent;
      }
    }
    & button {
      font-family: 'Kanit', sans-serif;
      font-weight: 100;
      background-color: transparent;
      color: var(--primary);
      border-color: rgb(118, 118, 118);

      font-style: normal;
      font-weight: 400;

      cursor: pointer;
      &:disabled {
        opacity: 0.1;
        cursor: not-allowed;
      }
      &:hover {
        background-color: rgb(221, 218, 218, 0.6);
      }
    }
  }
`;
