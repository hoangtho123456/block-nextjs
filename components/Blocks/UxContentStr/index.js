import React from 'react';

// import styles from './style.module.css';
const UxContentStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Digital brand guideline</h2>
          <div>
            Bạn có thể thấy toàn bộ bảng màu và các bố cục website 
            được liệt kê sẵn trong brand guideline
          </div>
        </section>
      </div>
    </div>
  );
}

export default UxContentStr;
