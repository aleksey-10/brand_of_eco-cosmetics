import React, { FC } from 'react';
import { Logo, Menu } from './components';
import styles from './styles.module.scss';
import cart from '../../assets/icons/cart.svg';

export const Header: FC = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.left}>
        <Logo />
        <Menu />
      </div>
      <button className={styles.cart} type="button">
        <img src={cart} alt="Cart" />
      </button>
    </header>
  );
};
