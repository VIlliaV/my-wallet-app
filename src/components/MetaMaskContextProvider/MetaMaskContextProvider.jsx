import { useState, useEffect, useCallback } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { formatBalance } from '../../utils/formatData';
import { MetaMaskContext } from '../../utils/hooks/useMetaMask';
import { MetaMaskSDK } from '@metamask/sdk';
console.log('🚀 ~ MetaMaskSDK:', MetaMaskSDK);
const MMSDK = new MetaMaskSDK();
console.log('🚀 ~ MMSDK:', MMSDK);
MMSDK.connect();
const disconnectedState = { accounts: [], balance: '', chainId: '' };
export const MetaMaskContextProvider = ({ children }) => {
  const [hasProvider, setHasProvider] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [wallet, setWallet] = useState(disconnectedState);

  const clearError = () => setErrorMessage('');

  const _updateWallet = useCallback(async providedAccounts => {
    const accounts = providedAccounts || (await window.ethereum.request({ method: 'eth_accounts' }));

    if (accounts.length === 0) {
      setWallet(disconnectedState);
      return;
    }

    const balance = formatBalance(
      await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      })
    );
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });

    setWallet({ accounts, balance, chainId });
  }, []);

  const updateWalletAndAccounts = useCallback(() => _updateWallet(), [_updateWallet]);
  const updateWallet = useCallback(accounts => _updateWallet(accounts), [_updateWallet]);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider();

      setHasProvider(Boolean(provider));

      if (provider) {
        updateWalletAndAccounts();
        window.ethereum.on('accountsChanged', updateWallet);
        window.ethereum.on('chainChanged', updateWalletAndAccounts);
        clearInterval();
      } else {
        // const MMSDK = new MetaMaskSDK();
        // const ethereum = MMSDK.getProvider();
        // const MMSDK = new MetaMaskSDK();
        // MMSDK.getProvider();
        // setInterval(() => {
        //   window.location.reload();
        // }, 5000);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener('accountsChanged', updateWallet);
      window.ethereum?.removeListener('chainChanged', updateWalletAndAccounts);
      clearInterval();
    };
  }, [updateWallet, updateWalletAndAccounts]);

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      clearError();
      updateWallet(accounts);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setIsConnecting(false);
  };

  const openSDK = async () => {
    const options = {
      checkInstallationImmediately: true,
    };

    const MMSDK = new MetaMaskSDK(options);

    MMSDK.getProvider();
  };

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        error: !!errorMessage,
        errorMessage,
        isConnecting,
        connectMetaMask,
        clearError,
        openSDK,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};
