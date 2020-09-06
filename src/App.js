import React from 'react';
import Header from './components/Header/header';
import Homepage from './pages/Homepage/homepage';

import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;