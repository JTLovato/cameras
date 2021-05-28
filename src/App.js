
import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Footer from './screens/Footer';
import Header from './screens/Header'
import Highlights from './screens/Highlights';
import Landing from './screens/Landing';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Landing />
        
        <Contact />
        <About />
        

        {/* <Highlights /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
