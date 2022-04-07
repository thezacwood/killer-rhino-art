import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Killer Rhino
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/#one">&#8592; Go Back</Link>
        </li>
        
      </ul>
    </nav>
  </header>
);

export default Header;
