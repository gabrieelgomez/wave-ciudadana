import React from 'react';
import imgBanner from '../../assets/img/undraw_public_discussion_btnw.svg';
import wave from '../../assets/img/wave.svg';

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h1>Wave Ciudadana</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes. </p>
        </div>
        <img className="illustration" src={imgBanner} alt="Wave Ciudadana"></img>
        <img className="wave" src={wave} alt="Wave Ciudadana"></img>
      </div>
    </div>
  );
}

export default Banner;