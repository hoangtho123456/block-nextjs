import React from 'react';
import Link from 'next/link'

const Banner = ({}) => {
  const title = 'Mango';
  const title2 = 'Ads';
  const title3 = 'Your business solutions destination';
  return (
    <div className="home-banner1 l-section">
      <div className="l-subsection with_parallax" style={{backgroundImage: 'url(https://mangoads.vn/vn/wp-content/uploads/2021/04/header-mangoads.jpg)'}}>
        <div className="l-subsection-h">
          <div className="l-subsection-hh g-html i-cf">
            <div className="title1">{title}<span className="highlight">{title2}</span></div>
            <div className="title2">{title3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
