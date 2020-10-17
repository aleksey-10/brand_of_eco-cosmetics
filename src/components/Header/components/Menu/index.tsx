import React, { FC } from 'react';
import styles from './styles.module.scss';
import burger from '../../../../assets/icons/burger.svg';

export const Menu: FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="#shop">Shop</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#contact">Contact</a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#about">About</a>
          </li>
        </ul>
      </nav>
      <button type="button" className={styles.burger}>
        <img src={burger} alt="burger" />
      </button>
    </>
  );
};
