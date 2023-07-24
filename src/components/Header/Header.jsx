import { formatAddress } from '../../utils/formatData';
import { useMetaMask } from '../../utils/hooks/useMetaMask';
import ButtonConnect from '../ButtonConnect/ButtonConnect';
import { Logo } from '../Logo/Logo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
  return (
    <HeaderContainer>
      <Logo />
      <div>
        {!hasProvider && (
          <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
            Install MetaMask
          </a>
        )}
        {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
          <button disabled={isConnecting} onClick={connectMetaMask}>
            Connect MetaMask
          </button>
        )}
        {hasProvider && wallet.accounts.length > 0 && (
          <a
            className="text_link tooltip-bottom"
            href={`https://etherscan.io/address/${wallet}`}
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Open in Block Explorer"
          >
            {formatAddress(wallet.accounts[0])}
          </a>
        )}
      </div>
      <ButtonConnect />
    </HeaderContainer>
  );
};

export default Header;
