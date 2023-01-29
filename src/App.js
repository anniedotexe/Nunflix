import './App.css';
import './components/Navbar.css';
import './components/Banner.css';
import './components/Row.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import RowLarge from './components/RowLarge';
import Footer from './components/Footer';
import requests from './request';

function App() {
  return (
    <div className="app">

      <Navbar />

      <Banner />

      <RowLarge title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="NUNFLIX ORIGINALS" fetchUrl={requests.fetchTrending} />
      <Row title="COMEDY" fetchUrl={requests.fetchTrending} />
      <Row title="SCI-FI & FANTASY" fetchUrl={requests.fetchTrending} />
      <Row title="ADVENTURE" fetchUrl={requests.fetchTrending} />
      <Row title="ROMANCE" fetchUrl={requests.fetchTrending} />
      <Row title="ACTION" fetchUrl={requests.fetchTrending} />

      <Footer />

    </div>
  );
}

export default App;
