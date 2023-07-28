import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MetaMaskContextProvider } from './components/MetaMaskContextProvider/MetaMaskContextProvider';
import MainPage from './pages/MainPage/MainPage';
import BackgroundDexola from './components/BackgroundDexola/BackgroundDexola';

function App() {
  return (
    <MetaMaskContextProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 2000,
          style: {
            background: 'rgb(30, 31, 40)',
            color: 'rgb(250, 250, 250)',
          },
        }}
      />
      <Container>
        <BackgroundDexola />
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
