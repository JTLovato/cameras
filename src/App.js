
import './App.css';
import Conctact from './screens/Conctact';
import Footer from './screens/Footer';
import Header from './screens/Header'
import Highlights from './screens/Highlights';
import Landing from './screens/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Landing />
      
      <Conctact />

      <Highlights />
      <Footer />
      </header>
    </div>
  );
}

export default App;
