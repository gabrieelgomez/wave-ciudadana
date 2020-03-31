import React from 'react';
import imgBanner from '../../assets/img/undraw_public_discussion_btnw.svg';
import wave from '../../assets/img/wave.svg';

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img className="illustration" src={imgBanner} alt="Wave Ciudadana"></img>
        <img className="wave" src={wave} alt="Wave Ciudadana"></img>
      </div>
    </div>
  );
}

export default Banner;