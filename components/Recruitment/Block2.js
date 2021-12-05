import React from 'react';
import Link from 'next/link'

const Block2 = ({}) => {
  const title = 'MangoAds';
  const decs = 'MangoAds là một môi trường làm việc thân thiện tạo điều kiện cho mỗi thành viên làm việc, cống hiến, cùng học hỏi, phát triển và tạo nên thật nhiều niềm vui trong suốt hành trình chinh phục những đỉnh cao mới. Đích đến cuối cùng là tạo ra những sản phẩm chuẩn mực với chất lượng tốt nhất để mang lại giá trị thực sự cho khách hàng. Để công việc đạt hiệu suất cao, điều quan trọng là phải có một đội ngũ thực thi tốt. Hiểu được tầm quan trọng của việc đào tạo, chúng tôi đặt Learning – Training vào trung tâm của doanh nghiệp, đảm bảo nó luôn vận hành như một động cơ để giúp doanh nghiệp không ngừng phát triển.';
  return (
    <div className="mg48 p-recruit1 ">
      <div className="container">
        <div className="dl-table row row-3 grid-space-60">
          <div className="col-md-12 col-lg-8">
            <div className="img thumb-1">
              <img src="https://mangoads.vn/vn/wp-content/uploads/2020/10/Tuyen-dung-.jpg" alt="tuyen-dung" />
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="divtext">
              <h2>{title}</h2>
              <p><span>{decs}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block2;
