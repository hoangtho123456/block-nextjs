import React from 'react';

const EnterpriseStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h1>Theo dõi và phân tích crawling budget</h1>
          <div>
            Khác với SEO cho các website có số lượng trang ít, 
            SEO cho các website lớn (sở hữu trên 1.000.000 trang) 
            yêu cầu những kỹ thuật phân tích chuyên sâu 
            dựa vào log analysis để phát hiện vấn đề 
            và chỉnh sửa kịp thời, đảm bảo các trang được index dầy đủ.
          </div>
        </section>
      </div>
    </div>
  );
}

export default EnterpriseStr;
