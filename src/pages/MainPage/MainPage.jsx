import { useState } from 'react';

const MainPage = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'address') {
      setAddress(value);
    } else if (name === 'amount') {
      setAmount(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Input 1 value:', address);
    console.log('Input 2 value:', amount);
  };
  return (
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
  );
};

export default MainPage;
