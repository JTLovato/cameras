
import './App.css';
import Footer from './screens/Footer';
import Header from './screens/Header'
import Landing from './screens/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Landing />

      <Footer />
      </header>
    </div>
  );
}

export default App;
