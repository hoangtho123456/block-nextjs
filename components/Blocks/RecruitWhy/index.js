import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const RecruitWhy = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg49} ${classSpacing}`}>
      <div className="container">
        <div className={styles["title"]}>
          <h2>Vì sao bạn nên làm việc tại MangoAds?</h2>
        </div>
        <div className={`row ${styles.row1}`}>
          <div className="col-sm-6 col-md-6">
            <p>Tại MangoAds, bạn sẽ được tham gia thử thách năng lực 
              của bản thân với nhiều dự án lớn, đồng thời mang lại 
              giá trị thực sự cho các đối tác của chúng tôi. 
              Với môi trường làm việc năng động, chúng tôi luôn ủng hộ 
              và khuyến khích các thành viên đóng góp ý kiến để 
              cải thiện hiệu quả công việc.</p>
          </div>
          <div className="col-sm-6 col-md-6">
            <p>Chúng tôi cam kết từng cá nhân có đủ không gian, 
              được trao quyền để làm việc độc lập đồng thời tự học hỏi 
              qua nhiều trải nghiệm để nâng cao kiến thức, hoàn thiện 
              bản thân. Bên cạnh đó, mỗi nhân viên sẽ có cơ hội 
              làm việc với nhiều đội nhóm khác nhau, tự quản lý 
              và vận hành công việc để mang lại hiệu quả tối ưu.</p>
          </div>
        </div>
      </div>
      <figure className={styles.fig1}>
        <div className="thumb-1">
          <Image 
            src="/images/items/view-1.jpeg"
            alt="Picture"
            width={1190}
            height={495}
            layout="responsive"
          />
        </div>
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="text-justify">
              <div className={"xstitle "+styles.xstitle}>
                <h3>Môi trường làm việc</h3>
              </div>
              <p>Môi trường làm việc thân thiện, cởi mở với 
                nhiều cơ hội thăng tiến là những yếu tố 
                để bạn lựa chọn, đồng hành và gắn kết lâu dài 
                với MangoAds. Không gian làm việc rộng rãi, 
                thoáng đãng cùng những trò chơi giải trí tập thể 
                sau giờ làm việc sẽ giúp bạn cảm thấy thoải mái, 
                tràn đầy năng lượng.</p>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="text-justify">
              <div className={"xstitle "+styles.xstitle}>
                <h3>Trau dồi kiến thức</h3>
              </div>
              <p>Cùng trải nghiệm hệ thống tài liệu phong phú 
                và các chương trình đào tạo nội bộ trực tiếp 
                từ cấp quản lý. MangoAds cam kết đóng góp 
                toàn bộ tri thức, tài liệu học thuật chuyên sâu 
                cho cộng đồng, để những người ham học hỏi hằng ngày 
                mài giũa năng lực bản thân, từ đó đóng góp 
                cho nền công nghiệp dịch vụ số của Việt Nam.</p>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="text-justify">
              <div className={"xstitle "+styles.xstitle}>
                <h3>Cơ hội kết nối</h3>
              </div>
              <p>Tại MangoAds, bạn sẽ có cơ hội làm việc 
                và học hỏi từ những chuyên gia dày dặn kinh nghiệm 
                để không ngừng nâng cao kỹ năng và kinh nghiệm 
                thực chiến. Tiếp nhận những kiến thức được 
                truyền đạt và ứng dụng ngay vào thực tiễn 
                sẽ giúp các bạn ghi nhớ tốt hơn để áp dụng 
                cho các dự án mới.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitWhy;
