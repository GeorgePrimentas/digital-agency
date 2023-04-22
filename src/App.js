import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Companies from './components/Companies';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Companies></Companies>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
