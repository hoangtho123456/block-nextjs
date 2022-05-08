import React from 'react';
// import Link from 'next/link';
// import Image from "next/image";

import styles from './style.module.css';
const RecruitTable = ({
  classSpacing='section',
  children}) => {
  const listJob = [
    {
      title:'App React',
      count: 3,
      des:'Vivamus vitae venenatis nulla, sit amet venenatis tellus. Nulla sit amet justo vitae quam congue fermentum. Etiam ultrices pharetra semper. '
    },
    {
      title:'Test Job 2',
      count: 8,
      des:'Phasellus blandit mi ut massa pulvinar, a fermentum ex aliquet. In gravida lacus id lacus iaculis fringilla. Duis at eros sed mi posuere eleifend. Mauris malesuada lacinia leo, in posuere purus vehicula sed.'
    },
    {
      title:'Test Job 3',
      count: 7,
      des:'Nunc nisi diam, luctus id blandit ac, ultrices consectetur enim. Praesent elementum sem eget nunc ullamcorper, in consequat nibh porta.'
    },
  ];

  return (
    <div className={`${styles.mg51} ${classSpacing}`}>
      <div className="container">
        <div className={styles["box"]}>
          <table className={`table table-hover ${styles["table"]}`}>
            <thead>
              <tr>
                <th className={`td1 ${styles.td1}`}> Vacancies</th>
                <th className="td2">Quantity</th>
                <th className={`td3 ${styles.td3}`}>Job description</th>
              </tr>
            </thead>
            <tbody>
              {listJob.map((item,index) => (
                <tr key={index}>
                  <td className={`td1 ${styles.td1}`}>
                    <a href="#">{item.title}</a>
                  </td>
                  <td className="td2">
                    <a href="#">{item.count}</a>
                  </td>
                  <td className={`td3 ${styles.td3}`}>
                    <a href="#">{item.des}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecruitTable;
