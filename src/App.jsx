import { Container } from './App.styled';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MetaMaskContextProvider } from './components/MetaMaskContextProvider/MetaMaskContextProvider';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <MetaMaskContextProvider>
      <Container>
        <Header />
        <main>
          <MainPage />
        </main>
        <Footer />
      </Container>
    </MetaMaskContextProvider>
  );
}

export default App;
