import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const RecruitIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={`dl-table row grid-space-60 ${styles['dl-tb']}`}>
          <div className="col-xs-12 col-md-12 col-lg-8">
            <div className="thumb-1">
              <Image
                alt="Mountains"
                src="/images/items/recruit-1.jpeg"
                layout="responsive"
                width={730}
                height={406}
              />
            </div>
          </div>
          
          <div className="col-md-12 col-lg-4">
            <div className="text-justify">
              <h2>MangoAds</h2>
              <p>MangoAds là một môi trường làm việc thân thiện 
                tạo điều kiện cho mỗi thành viên làm việc, cống hiến, 
                cùng học hỏi, phát triển và tạo nên thật nhiều 
                niềm vui trong suốt hành trình chinh phục 
                những đỉnh cao mới. Đích đến cuối cùng là tạo ra 
                những sản phẩm chuẩn mực với chất lượng tốt nhất 
                để mang lại giá trị thực sự cho khách hàng. 
                Để công việc đạt hiệu suất cao, điều quan trọng 
                là phải có một đội ngũ thực thi tốt. 
                Hiểu được tầm quan trọng của việc đào tạo, 
                chúng tôi đặt Learning – Training vào trung tâm 
                của doanh nghiệp, đảm bảo nó luôn vận hành 
                như một động cơ để giúp doanh nghiệp 
                không ngừng phát triển.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitIntro;
