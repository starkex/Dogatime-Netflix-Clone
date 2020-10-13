import React from 'react';
import netflixLogo from '../img/Asset1.png';

const Loader = () => {
  return (
    <div className='Loader'>
      <img className='Loader__logo' src={netflixLogo} alt='Netflix Logo' />
    </div>
  );
};

export default Loader;
