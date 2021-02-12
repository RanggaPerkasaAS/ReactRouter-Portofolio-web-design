import React from 'react';
import Utama from './Components/utama';
import {Link} from "react-router-dom";
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="https://www.instagram.com/ranggapas_/">@ranggapas_</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="nav-link">Beranda</Link>
              </li>
              <li class="nav-item">
                <Link to="/Tentangsaya" className="nav-link">Tentang saya</Link>
              </li>
              <li class="nav-item">
                <Link to="/Karya" className="nav-link">Karya</Link>
              </li>
              <li class="nav-item">
                <Link to="/Kontak" className="nav-link">Kontak</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Utama/>
      </div>
    );
  }
}  

export default App;