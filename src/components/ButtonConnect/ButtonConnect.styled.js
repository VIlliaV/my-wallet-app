import styled from 'styled-components';
import buttonD from '../../assets/button.png';

const Button = styled.button`
  padding: 5px;
  background-image: url(${buttonD});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 50%;
  animation: moveBackground 15s linear infinite;
  background-color: #fff;
  color: #fff;
  border-radius: 20px;
  transition: all 0.2s ease-out;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
    padding: 15px;
  }
  @keyframes moveBackground {
    0% {
      background-position: 0 80%;
    }
    50% {
      background-position: 100% 80%;
    }
    100% {
      background-position: 0 80%;
    }
  }
`;

export default Button;
