import React from 'react';

import styles from '../../GeneralStyles/UxGuideLine.module.css';
const EmailProcess = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className={`${styles["mg22"]} section`}>
        <div className="container">
          <div className={`row ${styles.row}`}>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t29"/>
                    </div>
                    <div className={styles["box-title"]}>
                      <h3>Test Opt email list</h3>
                    </div>
                  </div>
                  <div>
                    <p>Proin id mauris euismod, pulvinar neque ut, convallis mi. Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t45" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Design email</h3>
                    </div>
                  </div>
                  <div>
                    <p>Proin id mauris euismod, pulvinar neque ut, convallis mi. Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim.</p>
                    <p>Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-15" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Hoàn thiện nội dung</h3>
                    </div>
                  </div>
                  <div>
                    <p>Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo. Pellentesque nulla eros, ultrices eget lacus sit amet, ornare semper neque. Ut at dapibus ex, id iaculis nibh. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t24" /></div>
                    <div className={styles["box-title"]}>
                      <h3>Tracking code</h3>
                    </div>
                  </div>
                  <div>
                    <p>Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo. Pellentesque nulla eros, ultrices eget lacus sit amet, ornare semper neque. Ut at dapibus ex, id iaculis nibh. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-t53"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Test email marketing</h3>
                    </div>
                  </div>
                  <div>
                    <p>Split-test Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className={`${styles.item} text-justify boxshadow`}>
                <div className={styles.item_inner}>
                  <div className={`dl-table ${styles["dl-tb"]}`}>
                    <div className={`icon ${styles.item_icon}`}>
                      <i className="icon-18"/></div>
                    <div className={styles["box-title"]}>
                      <h3>Email Marketing Advance</h3>
                    </div>
                  </div>
                  <div>
                    <p>Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo. Pellentesque nulla eros, ultrices eget lacus sit amet, ornare semper neque. Ut at dapibus ex, id iaculis nibh. </p>
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

export default EmailProcess;
