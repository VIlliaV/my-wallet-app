import { useState } from 'react';
import { ethers } from 'ethers';
console.log('🚀 ~ ethers:', ethers);

import { toast } from 'react-hot-toast';
import { Container } from './MainPage.styled';
import { useMetaMask } from '../../utils/hooks/useMetaMask';
import { validateAddress } from '../../utils/validator';

const MainPage = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const { wallet } = useMetaMask();

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'address') {
      setAddress(value);
    } else if (name === 'amount') {
      setAmount(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!validateAddress(address)) return;
    const value = ethers.utils.parseEther(amount)._hex;
    setLoading(true);

    try {
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: wallet.accounts[0],

            to: address,
            value: value,
          },
        ],
      });

      toast.success('Transaction successfully completed!');
    } catch (error) {
      toast.error('Oops...something went wrong while sending the transaction. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          wallet address
          <input type="text" name="address" value={address} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          amount
          <input type="text" name="amount" value={amount} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default MainPage;
