import { toast } from 'react-hot-toast';
import { ethers } from 'ethers';

export const validateAddress = address => {
  const addressRegex = /^0x[0-9a-fA-F]{40}$/;

  if (!addressRegex.test(address)) {
    toast.error('Invalid Ethereum address format.');
    return false;
  }

  if (!ethers.utils.isAddress(address)) {
    toast.error('The entered address is not a valid Ethereum address.');
    return false;
  }

  return true;
};

export const validateTransfer = amount => {
  const isValidAmount = amount % 10 === 0 || /^0\./.test(amount);
  const isInRange = parseFloat(amount) >= 0.000001 && parseFloat(amount) <= 100000;

  if (isValidAmount && isInRange) {
    return true;
  } else {
    toast.error(
      'Invalid transfer amount. Please provide a valid amount in the range of 0.000001 to 100000 and the amount should be a multiple of 10.'
    );
    return false;
  }
};
