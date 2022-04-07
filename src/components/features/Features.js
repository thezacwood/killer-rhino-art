import React from 'react';

import pic1 from '../../images/shejustcantwin.jpg';
import pic2 from '../../images/A-Life-Less-Ordinary.jpg';
import pic3 from '../../images/lip.jpg';
import pic4 from '../../images/rhino.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/she-just-cant-win',
      image: pic1,
      heading: 'She Just Can’t Win',
      description: 'Oil on Canvas with added Epoxy resin effect. 36”x 36”',
      to: {
        href: '/she-just-cant-win',
        label: 'See more',
      },
    },
    {
      href: '/a-life-less-ordinary',
      image: pic2,
      heading: 'A Life Less Ordinary',
      description: 'Oils on Carbon Fiber on Wood and Epoxy 48”x 24”',
      to: {
        href: '/a-life-less-ordinary',
        label: 'See more',
      },
    },
    {
      href: '/off-the-lip',
      image: pic3,
      heading: 'Off The Lip',
      description: 'Oils, Epoxy, and Collage on canvas, 36”x48”',
      to: {
        href: '/off-the-lip',
        label: 'See more',
      },
    },
      {
      href: '/endangered',
      image: pic4,
      heading: 'Endangered',
      description: 'Wood, Epoxy, Oils, Mica powder. “15x 15” Limited edition of 5',
      to: {
        href: '/endangered',
        label: 'See more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
