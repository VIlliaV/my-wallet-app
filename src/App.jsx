import { Container } from './App.styled';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MetaMaskContextProvider } from './components/MetaMaskContextProvider/MetaMaskContextProvider';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <MetaMaskContextProvider>
      <Container>
        <figure style={{ boxSizing: 'border-box', margin: '-10px 0px', padding: '0' }}>
          <video
            autoPlay
            loop
            muted
            style={{ position: 'absolute', width: '100%', height: '100vh', objectFit: 'cover' }}
            poster="https://dexola.com/wp-content/uploads/2023/04/Dexola_BG_1-1.png"
          >
            <source
              src="https://dexola.com/wp-content/uploads/2023/04/26e9-48a0-96cb-0d05f28a3009_compressed.mp4"
              type="video/mp4"
            />
          </video>
          <figcaption>Ваш підпис або опис відео</figcaption>
        </figure>
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
