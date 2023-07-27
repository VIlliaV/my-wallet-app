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

export const validateTransfer = amount => {
  let isValidAmount = false;
  const amountWithoutZero = (amount * 10) / 10;
  const amountWithoutZeroString = amountWithoutZero.toString();
  const amountLengthAfterDote = amountWithoutZero.toString().split('.')[1]?.length;

  if (amountLengthAfterDote) {
    isValidAmount = amountWithoutZeroString[amountWithoutZeroString.length - 1] === '1';
  } else if (amount === '1') {
    isValidAmount = true;
  } else {
    isValidAmount = amount % 10 === 0;
  }

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
