import ButtonConnect from '../ButtonConnect/ButtonConnect';
import { Logo } from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />

      <ButtonConnect />
    </HeaderContainer>
  );
};

export default Header;
