import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 45px;
  padding: 5px;
  font-size: 24px;
  color: #17191d;
  font-family: 'Kanit', sans-serif;
  & ::placeholder {
    color: rgb(221, 218, 218);
  }

  & form {
    display: flex;
    flex-direction: column;

    & label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      & input {
        padding: 1px 10px;
        background-color: transparent;
      }
    }
    & button {
      font-family: 'Kanit', sans-serif;
      font-weight: 100;
      background-color: transparent;
      color: #17191d;
      border-color: rgb(118, 118, 118);

      font-style: normal;
      font-weight: 400;

      cursor: pointer;
      &:hover {
        background-color: rgb(221, 218, 218, 0.6);
      }
    }
  }
`;
