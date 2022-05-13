import React from 'react';

const RedesignStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h1>Est risus bibendum libero</h1>
          <div>
          In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.
          </div>
        </section>
      </div>
    </div>
  );
}

export default RedesignStr;
