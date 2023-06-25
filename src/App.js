import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import PageSecond from './components/PageSecond';
import PageThird from './components/PageThird';
function App() {
  return (
    <>
    
    <div className="App">
      <div className='upperSection'>
      <TopBar />
      <Navbar />
    </div>
    <div id='modelS'>

        <MainPage />
    </div>
    <div id='model3'>

        <PageSecond />
    </div>
    <div id='modelY'>

        <PageThird />
    </div>
      
    </div>
    </>
  );
}

export default App;
