import React from 'react';

import cantwin from '../images/she-just-cant-win.jpg';
import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">She Just Can't Win</h1>
          <span className="image fit">
            <img src={cantwin} alt="" />
          </span>
          <p className="auth">
            <strong>Artist Ryan “Rhino” Franklin</strong><br /> Oil on Canvas with added Epoxy resin effect. 36”x 36”
          </p>
          <p className="auth">
            Skin deep is based on the concept of the man that has everything. While he should treat his beautiful wife/girlfriend like a Queen. He does not. Leaving her to feel as if she is ugly in his eyes. Even though she feels ugly in his eyes. The people around her believe she is beautiful inside and out. The layers above the forehead illustrate her depth and her struggle with what she sees in the mirror versus how her husband makes her see herself. All the world sees the layers of: A great personality, charming, respectful, Helps others, funny, beauty, etc. Yet her husband keeps putting her down due to his own insecurities about himself and maybe the fact that he knows she is too good for him. The husband/Boyfriend in Black and White looks at her through his glasses filtered by his insecurity in the painting. In the script Skin Deep you can see the I and the P stand out above. Also, in the line to the right you can see the phrase trying to spell out “One man’s trash”. The A in trash is actually the @ sign. The letters and symbols (IP as in IP address and @ a website domain) allow the artist to hide Easter eggs in the painting which symbolize the internet and its view of young women and what it says they should be/look like. Not to mention her man looking and comparing her to the women of the internet. This view coupled with her husband’s view. Her friends and colleagues view of her. Combine with the memories of the happy girl she once was, (before she knew of her beauty) has broken her. Her once cherished layers in the painting are now effectively being peeled off to reveal a jaded broken woman. This jaded woman has now come full circle. Where she now believes that she must act empowered and self-serving (per society) and damn her husband (per herself). Yet the world (now signified by the man in glasses) is now viewing her as just a pretty shell encapsulating a truly ugly person with no more compassion. Did her husband break her? Did Society break her? Did she put too much emphasis on what people think? Either way; <strong>She Just can’t win</strong>


          </p>
    
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
