# Simple Web Application - Ethereum Wallet Manager

This is a test task that involves creating a basic web application that allows users to connect their Ethereum wallet,
check their account balance, view their wallet address, and execute token transfers from their connected wallet to
another address on the Ethereum Sepolia network.

## Features

The web application will have the following features:

- **Connect Wallet**: Users can connect their Ethereum wallet to the web application. The application should support
  popular wallets like MetaMask.

- **Check Balance**: Once the wallet is connected, users can check the balance of their Ethereum account. The
  application should display the account balance in Ether.

- **View Wallet Address**: The connected wallet's public address (Ethereum address) will be displayed to the user so
  that they can verify the correctness of the connected wallet.

- **Execute Token Transfer**: Users can initiate token transfers from their connected wallet to another address on the
  Ethereum Sepolia network. The application should allow users to enter the recipient's address and the amount of tokens
  they want to transfer.

## Technologies Used

The web application will be built using the following technologies:

- Frontend: HTML, CSS, JavaScript, React.js, styled-components
- Ethereum Test Network: Sepolia (for testing the token transfer functionality)
- Wallet Integration: MetaMask (as the preferred wallet for connecting to the application)
- Smart Contracts: If necessary, deploy simple ERC20 token smart contract on the Sepolia network

## How to Use

1. Clone the repository and install the required dependencies using `npm install`.

2. Make sure you have the MetaMask extension installed in your browser.

3. Start the development server using `npm start`.

4. Connect your MetaMask wallet to the application.

5. Check your account balance and view your wallet address.

6. To execute a token transfer:
   - Enter the recipient's Ethereum address.
   - Input the amount of tokens you want to transfer.
   - Click the "Transfer Tokens" button to initiate the transfer.

## Notes

- The application will be designed with a user-friendly interface for seamless interaction.
- Proper error handling and validation will be implemented for a smooth user experience.
- The token transfer functionality will be tested on the Ethereum Sepolia test network to prevent any loss of real funds
  during testing.

## Disclaimer

This web application is intended for testing purposes only and should not be used with real funds. The application
interacts with the Ethereum test network (Sepolia) and does not involve real Ether or valuable tokens. Please do not use
any real or valuable tokens while testing this application.
