import React from 'react';

// import styles from './style.module.css';
const UxContentStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Phasellus blandit mi ut massa pulvinar</h2>
          <div>
            Est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero.
            <p>Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UxContentStr;
