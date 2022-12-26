import React from 'react';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.code}>404</h1>
      <div className={styles.messageWrapper}>
        <h2 className={styles.message}>Page Not Found.</h2>
      </div>
    </div>
  );
};

export { PageNotFound };
