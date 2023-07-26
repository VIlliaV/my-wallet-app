import { toast } from 'react-hot-toast';
import { ethers } from 'ethers';

export const validateAddress = address => {
  const addressRegex = /^0x[0-9a-fA-F]{40}$/;

  if (addressRegex.test(address)) {
    if (ethers.utils.isAddress(address)) {
      return true;
    } else {
      toast.error('The entered address is not a valid Ethereum address.');
    }

    return false;
  } else {
    toast.error('Invalid Ethereum address format.');
    return false;
  }
};
