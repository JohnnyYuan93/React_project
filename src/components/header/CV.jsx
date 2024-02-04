import React from 'react';
import CV from '../../assets/ChristianResume.pdf';

const CVC = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CVC;
