import React from 'react';
import Image from "next/image";

import styles from './style.module.css';
const RecruitWhy = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={`${styles.mg49} ${classSpacing}`}>
      <div className="container">
        <div className={styles["title"]}>
          <h2>Generated 5 paragraphs, 444 words, 2953 bytes of Lorem Ipsum</h2>
        </div>
        <div className={`row ${styles.row1}`}>
          <div className="col-sm-6 col-md-6">
            <p>Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed. Ut in ultrices nulla. Pellentesque commodo, leo id pretium auctor, est risus bibendum libero, congue convallis elit lectus quis sem. Ut vitae vulputate libero. Aliquam suscipit ante et massa vulputate vestibulum.</p>
          </div>
          <div className="col-sm-6 col-md-6">
            <p>Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo. Pellentesque nulla eros, ultrices eget lacus sit amet, ornare semper neque. Ut at dapibus ex, id iaculis nibh. Nunc nisi diam, luctus id blandit ac, ultrices consectetur enim. Praesent elementum sem eget nunc ullamcorper, in consequat nibh porta.</p>
          </div>
        </div>
      </div>
      <figure className={styles.fig1}>
        <div className="thumb-1">
          <Image 
            src="/images/items/view-1.jpeg"
            alt="Picture"
            width={1190}
            height={495}
            layout="responsive"
          />
        </div>
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="text-justify">
              <div className={"xstitle "+styles.xstitle}>
                <h3>Curabitur elementum lectus finibus</h3>
              </div>
              <p>Nullam non ante eu lacus aliquet elementum ut ac odio. Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper. Sed neque ex, condimentum in ipsum in, venenatis efficitur lectus. Aliquam aliquet rutrum nisi, eu venenatis eros tempus et. </p>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="text-justify">
              <div className={"xstitle "+styles.xstitle}>
                <h3>Nam metus orci, mattis id vestibulum faucibus</h3>
              </div>
              <p>Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.</p>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="text-justify">
              <div className={"xstitle "+styles.xstitle}>
                <h3>Nullam dignissim pretium leo ac ultrices.</h3>
              </div>
              <p>Phasellus convallis ante in maximus sagittis. Curabitur sit amet neque rhoncus sem blandit accumsan. Integer ut erat ultrices nibh imperdiet dapibus id ut velit. Maecenas malesuada, ligula vel tristique molestie, mauris orci cursus magna, sed auctor justo ante quis nibh. Aenean tincidunt lorem vel felis congue semper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitWhy;
