import React from 'react';
import Image from "next/image";

const MediaBigImg = ({
  classSpacing='',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="c-img1">
        <Image 
          src="/images/items/media-banner.jpeg"
          alt="team"
          width={1200}
          height={494}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default MediaBigImg;
