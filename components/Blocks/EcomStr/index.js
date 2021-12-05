import React from 'react';

const EcomStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Quy trình phát triển một dự án E-commerce</h2>
          <div>
            Các bước được thực hiện rõ ràng, minh bạch, 
            giúp bạn dễ dàng theo dõi dự án
          </div>
        </section>
      </div>
    </div>
  );
}

export default EcomStr;
