import React from 'react';

const EmailStr = ({
  classSpacing='section',
  children}) => {
  return (
    <div className={classSpacing}>
      <div className="page-desc section-0">
        <section className="container">
          <h2>Email marketing</h2>
          <p>
            Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. Mauris nec bibendum diam. Maecenas non leo ornare, vulputate nunc vel, molestie tortor. Curabitur elementum lectus finibus, cursus ligula vestibulum, dignissim justo. Pellentesque nulla eros, ultrices eget lacus sit amet, ornare semper neque. Ut at dapibus ex, id iaculis nibh. 
          </p>
        </section>
      </div>
    </div>
  );
}

export default EmailStr;
