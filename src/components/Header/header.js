import React from 'react';
import './header.styles.scss'

import Logo from '../../assets/logo.png';

const Header = props => {

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="Monti Logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;