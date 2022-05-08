import React from 'react';

const WebDesignStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Curabitur sit amet neque rhoncus sem blandit accumsan.</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus orci, mattis id vestibulum faucibus, vehicula eu ex. Nullam dignissim pretium leo ac ultrices. Fusce pellentesque quis purus ut dictum. Maecenas eu nisl congue, tincidunt nunc ac, rhoncus ipsum. Mauris a enim tincidunt, euismod purus eu, commodo mi. Fusce et ligula eros. Etiam lectus felis, mollis in ante ac, feugiat mattis augue. Mauris vitae fermentum est. Donec sit amet ex ut purus interdum commodo.
          </div>
        </section>
      </div>
    </div>
  );
}

export default WebDesignStr;
