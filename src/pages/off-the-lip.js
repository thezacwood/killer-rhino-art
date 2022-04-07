import React from 'react';

import lip2 from '../images/off-the-lip1.jpg';
import lip3 from '../images/off-the-lip2.jpg';
import lip4 from '../images/off-the-lip3.jpg';
import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Off The Lip</h1>
          <span className="image fit">
            <img src={lip2} alt="" />
          </span>
          <p className="auth">
            <strong>Artist Ryan “Rhino” Franklin</strong><br /> Oils, Epoxy, and Collage on canvas, 36”x48”
          </p>
          <p className="auth">
              This work is a throw back in time. Back to the loud in your face 80’s and early 90’s. Big hair, Big lips, tight pants, and makeup were the way, and that was the men. It was an era of excess. MTV was just getting off the ground. Fashion, Music, and Sports Marketing were in your face. The internet wasn’t but in its infant stages. So magazines and paper advertising had to be in bold and eye catching to get the customer to pick it up and buy it. Things have changed since then, but I love the bright colors, larger than life personalities, and over the top advertising. Surfers were cool, tough, nomads. Race car drivers were all smokers. Rock Stars were gods, and athletes were brands. At least the way they advertised to us. What I wanted out of this piece was for it to look like a layered advertisement. Maybe a famous sponsored surfer doing an ad for lip balm. I wanted it to look just like it could say, Gotcha, Quiksilver, OP, Vans, Body Glove, or another 80’s iconic brand right across the middle of it. 

          </p>
    <span className="image fit">
            <img src={lip3} alt="" />
          </span>
    <span className="image fit">
            <img src={lip4} alt="" />
          </span>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
