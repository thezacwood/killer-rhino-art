import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
      
    <div className="inner">
        
      <h1>Killer Rhino Art</h1>
      <p>
        Welcome to Killer Rhino, the online gallery of artist Ryan "Rhino" Franklin.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
