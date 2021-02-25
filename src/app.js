import React, { Component } from 'react'
//import Header from './components/layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavbarSection';
import './App.css';
import HeroSection from './components/HeroSection';

export default class App extends Component {
    render() {
        return (
          <Router>
             <NavBar/>
             <HeroSection/>
          </Router>                            
        )
    }
}


