import React from 'react';
import './HomeHeading.css';

const HomeHeading = (props) => {
  return (
    <div className="HomeHeading" style={{ justifyContent: 'space-between' }}>
      <h5>{props.label}</h5>
      <span className="viewmore">View more</span>
    </div>
  );
}

export default HomeHeading;
