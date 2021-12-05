import React from 'react';

const EmailStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Quy trình Email marketing tại MangoAds</h2>
          <div>
            Một chiến dịch Email marketing tại MangoAds 
            được triển khai gồm 6 bước
          </div>
        </section>
      </div>
    </div>
  );
}

export default EmailStr;
