import React from 'react';

import styles from '../../GeneralStyles/HomeAbout.module.css';
const EcomService = ({
  classSpacing='section',
  children
}) => {
  return (
    <div className={`${styles["mg46"]} ${classSpacing}`}>
      <div className="container">
        <section className={`section-header ${styles["box1"]}`}>
          <h2>Neque porro quisquam est qui dolorem ipsum</h2>
          <div className={`desc2 ${styles["text1"]}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros.
          </div>
        </section>

        <div className="row grid-space-80">
          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t5`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Web design & development</h3>
              </section>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t17`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Website maintenance & support</h3>
              </section>
              <p className="text-justify">
                Nullam non ante eu lacus aliquet elementum ut ac odio. Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. Sed neque ex, condimentum in ipsum in, venenatis efficitur lectus. 
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t3`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>eCommerce application development</h3>
              </section>
              <p className="text-justify">
                Nullam non ante eu lacus aliquet elementum ut ac odio. Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. Sed neque ex, condimentum in ipsum in, venenatis efficitur lectus. 
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6">
            <div className={`${styles.item}`}>
              <p className={styles.icon1}>
                <i className={`icm50 icon-t28`}/>
              </p>
              <section className={styles["sec1"]}>
                <h3>Custom modules & plugins</h3>
              </section>
              <p className="text-justify">
                Proin id mauris euismod, pulvinar neque ut, convallis mi. Quisque ut faucibus arcu. Fusce eget diam sollicitudin, blandit velit nec, maximus enim. Nullam ornare tortor vitae risus consectetur, et volutpat ante tristique. Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomService;
