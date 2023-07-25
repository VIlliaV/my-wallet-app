import Button from './ButtonConnect.styled';
import { formatAddress } from '../../utils/formatData';
import { useMetaMask } from '../../utils/hooks/useMetaMask';

const ButtonConnect = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();

  return (
    <Button disabled={isConnecting} onClick={connectMetaMask}>
      {!hasProvider && (
        <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
          Install MetaMask
        </a>
      )}
      {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && 'Connect MetaMask'}
      {hasProvider && wallet.accounts.length > 0 && (
        <pre>
          {wallet.balance}
          {'    '}
          {formatAddress(wallet.accounts[0])}
        </pre>
      )}
    </Button>
  );
};

export default ButtonConnect;
