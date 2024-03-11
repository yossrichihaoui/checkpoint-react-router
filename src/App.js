import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Exemple_Navbar from './components/Exemple_Navbar';
import Movielist from './components/movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import netflixlogo from './Couleur-logo-Netflix.jpg';
import Compter from './components/Compter';
import Description from './components/Description';
import { Movies } from './components/data';
function App() {
  
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="App">
        <Routes>
          <Route path='/Description/:title' element={<Description movies={Movies}/>}/>
          <Route path='/' element={
          <>
            <Exemple_Navbar logo={netflixlogo} />
            
            <Movielist/>
          </> 
        }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
