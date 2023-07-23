import Button from './ButtonConnect.styled';

const ButtonConnect = () => {
  const handleConnect = e => {
    console.log(e);
  };

  return <Button onClick={handleConnect}>connect to wallet</Button>;
};

export default ButtonConnect;
