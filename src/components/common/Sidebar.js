import React from 'react';
import Scrollspy from 'react-scrollspy';
import Tab from './Tab';
import pic1 from '../../images/rhino-horns.png';
const Sidebar = () => {
   
  const [tabs] = React.useState([
    { content: 'Welcome', href: 'intro' },
    { content: 'Artwork', href: 'one' },
    { content: 'Bio', href: 'two' },
    { content: 'Contact', href: 'three' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
      <img src={pic1} alt="" width="100px"/>
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
