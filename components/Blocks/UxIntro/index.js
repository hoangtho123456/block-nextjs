import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const UxIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>UI/UX tại MangoAds</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>Nếu internet là con đường, content 
                là những chiếc xe thì UI sẽ là thiết kế 
                của chiếc xe, bạn đi ngang qua có thu hút 
                được ánh nhìn hay không phụ thuộc vào chiếc xe đẹp 
                hay xấu, nội dung chuyển đến người dùng có 
                hiệu quả hay không thì phụ thuộc vào UX tức là 
                công năng của chiếc xe có dễ lái, 
                dễ vận hành hay không.</p>
              <p>UI/UX design giống như là thiết kế showroom 
                của doanh nghiệp bạn vậy, bạn tốn rất nhiều 
                ngân sách để kéo người dùng đến showroom. 
                Nhưng nếu dịch vụ, sản phẩm không được trình bày 
                gọn gàng dễ nắm bắt, thì những khách hàng đã 
                tốn công đến showroom sẽ không trở thành người mua. 
                Họ hoàn toàn có thể qua bên showroom đối thủ, 
                nơi hàng hoá dịch vụ được trưng bày nơi dễ thấy 
                như ngay từ ngoài bàn tiếp tân chẳng hạn. 
                Vậy nếu đã tốn rất nhiều ngân sách cho marketing 
                thì bạn cần cũng nên chi một ngân sách phù hợp 
                cho website, app,… để đo đạc và tối ưu trải nghiệm 
                của người dùng.</p>
              <p>Tại MangoAds, chúng tôi nhìn thiết kế 
                dưới con mắt của những marketer cầu toàn, 
                đặt mình vào vị trí của người dùng để 
                đánh giá trải nghiệm của từng mẫu thiết kế.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxIntro;
