import React from 'react';
import styles from './style.module.css';

const SeoContent = ({
  classSpacing='section',
  children
}) => {
  const arr = [{
    icon: 'icon-t32',
    title: 'HIGH END Ipsump',
    text: 'Fusce eget diam sollicitudin Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper.'
  },{
    icon: 'icon-t3',
    title: 'CHUYÊN GIA',
    text: 'Curabitur justo felis, faucibus quis maximus ut, bibendum quis mauris. In nisl purus, rutrum venenatis facilisis ut, venenatis ut dolor. Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper.'
  },{
    icon: 'icon-t26',
    title: 'Test performance',
    text: 'Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper.'
  }];
  return (
    <div className={`${styles.mg27} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles.box1}`}>
          <h2>Content SEO</h2>
          <div className={`desc2 ${styles.text1}`}>
            Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="text-center">
              <div className={`c-info1 ${styles['info1']}`}>
                <i className={`icm50 icon-t37`}/>
                <div className="c-info1__item1 b">
                  <h3>Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet.</h3>
                </div>
              </div>
              <div className="text-justify">
                Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <div className="text-center">
              <div className={`c-info1 ${styles['info1']}`}>
                <i className={`icm50 icon-t50`}/>
                <div className="c-info1__item1 b">
                  <h3>Aliquam suscipit ante et massa vulputate vestibulum.</h3>
                </div>
              </div>
              <div className="text-justify">
                In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <div className="text-center">
              <div className={`c-info1 ${styles['info1']}`}>
                <i className={`icm50 icon-t27`}/>
                <div className="c-info1__item1 b">
                  <h3>Backlink profile</h3>
                </div>
              </div>
              <div className="text-justify">
                Leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoContent;
