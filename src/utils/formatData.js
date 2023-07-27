import { ethers } from 'ethers';

export function formatBalance(rawBalance) {
  const balance = parseFloat(ethers.utils.formatUnits(rawBalance, 18)).toFixed(3);

  return balance;
}

export function formatChainAsNum(chainIdHex) {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
}

export function formatAddress(address) {
  return `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;
}
