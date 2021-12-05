import React from 'react';

const ProductBlock1 = ({}) => {
  const title = 'Chào mừng bạn đến với';
  const decs = 'Product Team';
  return (
    <div>
      <section className="c-banner1 c-banner1--type1 page-desc ss-radius-bottom2-2">
        <div className="container">
          <div className="desc34">{title}</div>
          <h1 className="page-title" /><h1>{decs}</h1>
        </div>
        <div className="imgbg">
          <img src="https://mangoads.vn/vn/wp-content/themes/wp-th/assets/images/bg-svg/04-01.svg" alt="img"/>
        </div>
      </section>
    </div>
  );
}

export default ProductBlock1;
