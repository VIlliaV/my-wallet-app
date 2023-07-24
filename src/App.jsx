// import './App.css';
import { Container } from './App.styled';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Container>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
