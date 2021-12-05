import React from 'react';
import Image from "next/image";

// import styles from './style.module.css';
const TeamBigImg = ({
  classSpacing='',
  children}) => {
  return (
    <div className={`${classSpacing}`}>
      <div className="c-img1">
        <Image 
          src="/images/items/team-1.jpeg"
          alt="team"
          width={1200}
          height={587}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default TeamBigImg;
