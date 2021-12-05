import React from 'react';

const ProjectBlock2 = ({}) => {
  const decs = 'Chúng tôi là đội ngũ kết nối liên kết mọi vận hành và xây dựng sản phẩm của tập thể MangoAds';
  return (
    <div className="section-b">
      <section className="mg55">
        <div className="container">  
          <div className="largedesc">
            <div className="img">
              <img src="https://mangoads.vn/vn/wp-content/themes/wp-th/assets/images/img-svg/img-15.svg" alt="img" loading="lazy" />
            </div>
            <span>{decs}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectBlock2;
