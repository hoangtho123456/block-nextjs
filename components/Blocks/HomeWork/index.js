import React from 'react';
import styles from './style.module.css';

const Work = ({
  classSpacing='section',
  children
}) => {
  const arr = [{
    icon: 'icon-t32',
    title: 'Where does it come from?',
    text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.'
  },{
    icon: 'icon-t3',
    title: 'Where can I get some?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },{
    icon: 'icon-t26',
    title: 'Where does it come from?',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }];
  return (
    <div className={`${styles.mg27} ${classSpacing}`}>
      <div className="container">
        <div className={`section-header ${styles.box1}`}>
          <h2>Lorem Ipsum</h2>
          <div className={`desc2 ${styles.text1}`}>
            Where does it come from?
          </div>
        </div>

        <div className="row">
          {arr.map((item,index)=>(
            <div className="col-sm-4 col-md-4" key={index}>
              <div className="text-center">
                <div className={`c-info1 ${styles['info1']}`}>
                  <i className={`icm50 ${item.icon}`}/>
                  <div className="c-info1__item1 b">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className="text-justify">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
