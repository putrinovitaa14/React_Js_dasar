import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => { 
  const navHeading = "Navigation Bar";
  const navText = "Profil";

  const clicked = () => {
    return alert("Hallo Selamat Datang Yaa:) ");
  }

  const paragraf = () => {
    return (
      <div>
        <h3>oke oke</h3>
        <marquee>Terimakasih Guys</marquee>
      </div>
    );
  };

  function Greeting(props) {
    return <h1> Hallo {props.name}</h1>
  }

// function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        {/* <Navbar test={navText} navHeading={navHeading}/> */}
        <Navbar navText={navText} navHeading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Hafsha's Project
        </p>
        <Greeting name=""/>
        <MyButton clicked={clicked} />
        <Footer paragraf={paragraf}/>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );

}

export default App;
