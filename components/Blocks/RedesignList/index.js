import React from 'react';

import styles from '../../GeneralStyles/UxGuideLine.module.css';
const RedesignList = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg22"]} ${styles["mg22-nobg"]}`}>
        <div className="container">
          <div className={`row ${styles.row}`}>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t6"/>
                    </div>
                    <div className={styles["box-title"]}>
                      <h3>Page speed</h3>
                    </div>
                  </div>
                  <div>
                    <p>Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t8" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Management web</h3>
                    </div>
                  </div>
                  <div>
                    <p>Sed neque ex, condimentum in ipsum in, venenatis efficitur lectus. Aliquam aliquet rutrum nisi, eu venenatis eros tempus et. Donec a porta nisi. Proin sed odio quis lorem tristique bibendum. Praesent leo risus, pretium a sollicitudin condimentum, mattis ac dui. Fusce dolor nisi, auctor ut consequat eget, porta sed mi.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t3" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Change new website</h3>
                    </div>
                  </div>
                  <div>
                    <p>Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t18" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Loremp ipsimp</h3>
                    </div>
                  </div>
                  <div>
                    <p>Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedesignList;
