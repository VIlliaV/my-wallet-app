import Button from './ButtonConnect.styled';
import { formatAddress } from '../../utils/formatData';
import { useMetaMask } from '../../utils/hooks/useMetaMask';
import { MetaMaskSDK } from '@metamask/sdk';
// const MMSDK = new MetaMaskSDK();
const ButtonConnect = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask, openSDK } = useMetaMask();

  let handleButton = !hasProvider ? openSDK : wallet.accounts.length < 1 ? connectMetaMask : () => {};

  return (
    <Button disabled={isConnecting} onClick={handleButton}>
      {!hasProvider && 'Install MetaMask'}
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
