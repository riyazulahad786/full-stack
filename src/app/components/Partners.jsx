import React from 'react';
import Image from 'next/image';
import zoom from '../assets/partner/zoom.png';
import webflow from '../assets/partner/webflow.png';
import coinbase from '../assets/partner/coinbase.png';
import dropbox from '../assets/partner/dropbox.png';
import spotify from '../assets/partner/spotify.png';
import slack from '../assets/partner/slack.png';
import '../assets/styles/partner.css';

const Partners = () => {
  const images = [webflow, coinbase, dropbox, spotify, slack];

  return (
    <div className="container mx-auto lg:px-5 logos">
      <div className="logo_items">
        {images.concat(images).map((img, index) => (
          <Image alt="image" key={index} src={img} alt="Partner logo" width={100} height={60} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
