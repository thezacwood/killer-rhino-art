import React from 'react';

import rhinos1 from '../images/RyansRhinos-006.jpg';
import rhinos2 from '../images/RyansRhinos-008.jpg';
import rhinos3 from '../images/RyansRhinos-033.jpg';
import rhinos4 from '../images/RyansRhinos-069.jpg';
import rhinos5 from '../images/ryansrhinos-020.jpg';
import rhinos6 from '../images/ryansrhinos-022.jpg';
import rhinos7 from '../images/ryansrhinos-026.jpg';
import rhinos8 from '../images/ryansrhinos-050.jpg';
import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Endangered Series</h1>
          <span className="image fit">
            <img src={rhinos1} alt="" />
          </span>
          <p className="auth">
            <strong>Artist Ryan “Rhino” Franklin</strong><br /> Wood, Epoxy, Oils, Mica powder. “15x 15” Limited edition of 5.
          </p>
          <p className="auth">
            Since I was young my nickname was “RHINO”. So I have always had a special place in my heart for these animals. The brutality from poachers is heartbreaking. 
I did this 5 piece series to bring awareness to the problem. I would hate for my young girls to see this animals extinction in their lifetime. I hope that the bright colors and the innocent face of the Rhino sculpt can make an impact on some hearts to donate.


          </p>
    <span className="image fit">
            <img src={rhinos2} alt="" />
          </span>
    <span className="image fit">
            <img src={rhinos3} alt="" />
          </span>
    <span className="image fit">
            <img src={rhinos4} alt="" />
          </span>
 <span className="image fit">
            <img src={rhinos5} alt="" />
          </span>
 <span className="image fit">
            <img src={rhinos6} alt="" />
          </span>
 <span className="image fit">
            <img src={rhinos7} alt="" />
          </span>
 <span className="image fit">
            <img src={rhinos8} alt="" />
          </span>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
