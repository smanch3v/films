import './App.css';
import Header from './components/UI/Header';
import Container from './components/UI/Container';
import Footer from './components/UI/Footer';
import Button from './components/UI/Button';

function App() {
  return (
    <Container>
      <Header />
      <h1>Text in the container passed through props</h1>
      <Button text="Submit" />
      <Footer />
    </Container>
  )
}

export default App;
