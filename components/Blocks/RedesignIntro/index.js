import React from 'react';

import styles from '../../GeneralStyles/AboutIntro.module.css';
const RedesignIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={styles["mg08"]}>
          <h2>Trend design website</h2>
          <div className={styles["item"]}>
            <div className={`text-justify ${styles["inner"]}`}>
              <p>Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedesignIntro;
