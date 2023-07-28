import { useMetaMask } from '../../utils/hooks/useMetaMask';
import ButtonConnect from '../ButtonConnect/ButtonConnect';
import { Logo } from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';
import { toast } from 'react-hot-toast';

const Header = () => {
  const { error, errorMessage, clearError } = useMetaMask();

  if (error) {
    toast.error(errorMessage);
    clearError();
  }

  return (
    <HeaderContainer>
      <Logo />
      <ButtonConnect />
    </HeaderContainer>
  );
};

export default Header;
