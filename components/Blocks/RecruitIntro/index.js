import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const RecruitIntro = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="container">
        <div className={`dl-table row grid-space-60 ${styles['dl-tb']}`}>
          <div className="col-xs-12 col-md-12 col-lg-8">
            <div className="thumb-1">
              <Image
                alt="Mountains"
                src="/images/items/recruit-1.jpeg"
                layout="responsive"
                width={730}
                height={406}
              />
            </div>
          </div>
          
          <div className="col-md-12 col-lg-4">
            <div className="text-justify">
              <h2>Test Co</h2>
              <p>Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitIntro;
