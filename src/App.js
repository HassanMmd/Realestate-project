import { HashRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import UpButton from './components/UpButton'

function App() {
  return (
    <div className="App">
      <HashRouter hashType="hashbang">
        <Header />
        <Main />
        <UpButton />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
