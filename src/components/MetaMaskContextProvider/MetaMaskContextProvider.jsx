import { useState, useEffect, useCallback } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { formatBalance } from '../../utils/formatData';
import { MetaMaskContext } from '../../utils/hooks/useMetaMask';
import { MetaMaskSDK } from '@metamask/sdk';
import { isMobile } from 'react-device-detect';
const MMSDK = new MetaMaskSDK();
let ethereum = window.ethereum;
const disconnectedState = { accounts: [], balance: '', chainId: '' };
export const MetaMaskContextProvider = ({ children }) => {
  const [hasProvider, setHasProvider] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [wallet, setWallet] = useState(disconnectedState);

  if (isMobile) {
    // const MMSDK = new MetaMaskSDK();
    ethereum = MMSDK.getProvider();
    // MMSDK.connect();
  }

  const clearError = () => setErrorMessage('');

  const _updateWallet = useCallback(async providedAccounts => {
    const accounts = providedAccounts || (await ethereum.request({ method: 'eth_accounts' }));

    if (accounts.length === 0) {
      setWallet(disconnectedState);
      return;
    }

    const balance = formatBalance(
      await ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      })
    );
    const chainId = await ethereum.request({
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
        ethereum.on('accountsChanged', updateWallet);
        ethereum.on('chainChanged', updateWalletAndAccounts);
      }
    };

    getProvider();

    return () => {
      ethereum?.removeListener('accountsChanged', updateWallet);
      ethereum?.removeListener('chainChanged', updateWalletAndAccounts);
    };
  }, [updateWallet, updateWalletAndAccounts]);

  const connectMetaMask = async () => {
    setIsConnecting(true);
    const ethereum = MMSDK.getProvider();
    // if (!isMobile) {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      clearError();
      updateWallet(accounts);
    } catch (err) {
      setErrorMessage(err.message);
    }
    // }
    setIsConnecting(false);
  };

  const openSDK = async () => {
    // const options = {
    //   checkInstallationImmediately: true,
    // };

    //  const MMSDK = new MetaMaskSDK(options);?\
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
