import React from 'react';

import life from '../images/a-life-less.jpg';
import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">A Life Less Ordinary</h1>
          <span className="image fit">
            <img src={life} alt="" />
          </span>
          <p className="auth">
            <strong>Artist Ryan “Rhino” Franklin</strong><br /> Oils on Carbon Fiber on Wood and Epoxy 48”x 24”
          </p>
          <p className="auth">
            A Life Less Ordinary is a study in contrast. The contrast in the actual painting with its negative space and light, and the contrast in life. Some people have a spouses some don't. Some have significant others, some don't. Some have nice cars and some don’t. It is a rarity to have both or everything you want out of this life. The concept of this work is to play with the contrast of a very expensive material to portray a very expensive lifestyle. Carbon Fiber was invented for the Areo Space industry. Here it is used as the canvas for this painting signifying the high end lifestyle. You have to ask yourself is the "Life Less Ordinary" worth what it takes, or does the contrasting lifestyle of less is more really lead to the happier life? <br /><br />
                   This work is the first of its kind for me and has lead me down the path of experimenting with layer of paint and resin to create depth. 


          </p>
    
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
