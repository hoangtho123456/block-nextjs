import React from 'react';
import Image from "next/image";

const RedesignBigImg = ({
  classSpacing='',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="c-img1">
        <Image 
          src="/images/items/ux-big-img.jpeg"
          alt="team"
          width={1200}
          height={587}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default RedesignBigImg;
