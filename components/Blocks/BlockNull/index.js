import React from 'react';

const BlockNull = ({
  classSpacing='',
  children}) => {
  return (
    <div className={classSpacing}>
      <section style={{minHeight: '300px',paddingTop: '40px'}}>
        <h1 style={{textAlign:'center'}}>No content</h1>
      </section>
    </div>
  );
}

export default BlockNull;
