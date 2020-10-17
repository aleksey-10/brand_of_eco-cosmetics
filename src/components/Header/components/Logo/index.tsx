import React, { FC } from 'react';
import logo from '../../../../assets/icons/logo.svg';
import styles from './styles.module.scss';

export const Logo: FC = () => (
  <>
    <div className={styles.desktop}>
      <img
        src={logo}
        alt="Logo"
        className={styles.img}
      />
      <span className={styles.text}>
        witch of mountain winds
      </span>
    </div>
    <div className={styles.mobile}>
      <img
        src={logo}
        alt="Logo"
        className={styles.img}
      />
    </div>
  </>
);
