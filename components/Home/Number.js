import React from 'react';
import Link from 'next/link'

const Number = ({}) => {
  const title = 'Những con số ấn tượng';
  const number = '569';
  const number2 = '83';
  const number3 = '163';
  const number4 = '245';
  const text1 = 'Website';
  const text2 = 'Đối tác';
  const text3 = 'Dự án';
  const text4 = 'Chiến dịch quảng cáo';
  return (
    <div className="bg-white">
      <div style={{height: '60px'}} aria-hidden="true" className="wp-block-spacer" />
      <h2 style={{textAlign: 'center'}}>{title}</h2>
      <div className="container">
        <div className="mg07">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <div className="item">
                <div className="timer" data-form={9} data-to={569} data-speed={1000}>{number}</div>
                <p style={{fontSize: '18px', fontWeight: 700}}>{text1}</p>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="item">
                <div className="timer" data-form={9} data-to={83} data-speed={1000}>{number2}</div>
                <p style={{fontSize: '18px', fontWeight: 700}}>{text2}</p>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="item">
                <div className="timer" data-form={9} data-to={163} data-speed={1000}>{number3}</div>
                <p style={{fontSize: '18px', fontWeight: 700}}>{text3}</p>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="item">
                <div className="timer" data-form={9} data-to={245} data-speed={1000}>{number4}</div>
                <p style={{fontSize: '18px', fontWeight: 700}}>{text4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number;
