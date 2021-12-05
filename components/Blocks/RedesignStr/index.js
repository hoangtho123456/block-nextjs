import React from 'react';

const RedesignStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h1>Các phần tối ưu về kỹ thuật</h1>
          <div>
            Thực hiện tối ưu về kỹ thuật rất quan trọng, 
            giúp tạo nên trải nghiệm thân thiện với người dùng
          </div>
        </section>
      </div>
    </div>
  );
}

export default RedesignStr;
