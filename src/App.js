import './App.css';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';

//
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      
      </BrowserRouter>
      


    </div>
  );
}

export default App;
