import './App.css';
import Header from './Components/Header';
import Maintop from './Components/Maintop';
import Maindown from './Components/Maindown';
import Boost from './Components/Boost';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header/>
      <Maintop/>
      <Maindown/>
      <Boost/>
      <Footer/>
    </>
  );
}

export default App;
