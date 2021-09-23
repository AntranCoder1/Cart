import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Section from './components/Section';

import { DataProvider } from './components/Context';

class App extends Component {
  render() {
    return (
     <DataProvider>
        <div className="App">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
     </DataProvider>
    );
  }
}

export default App;
