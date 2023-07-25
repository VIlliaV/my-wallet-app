export function formatBalance(rawBalance) {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(3);
  return balance;
}

export function formatChainAsNum(chainIdHex) {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
}

export function formatAddress(addr) {
  return `${addr.substring(0, 5)}...${addr.substring(addr.length - 4)}`;
}
