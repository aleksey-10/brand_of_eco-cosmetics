import React, { FC, useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import burger from '../../../../assets/icons/burger.svg';
import times from '../../../../assets/icons/times.svg';
import { menuList } from '../../../../services/Menu';

export const Menu: FC = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState<boolean>(false);

  const mobileMenuClassNames = classnames({
    [styles.mobileMenu]: true,
    [styles.mobileMenuActive]: isMobileMenuActive,
  });

  return (
    <>
      <div className={mobileMenuClassNames}>
        <button
          type="button"
          className={`${styles.times} container`}
          onClick={() => setMobileMenuActive(false)}
        >
          <img src={times} alt="times" />
        </button>
        <nav className="container">
          <ul className={styles.mobileList}>
            {menuList.map(({ link, value }) => (
              <li key={value} className={styles.mobileItem}>
                <a className={styles.mobileLink} href={link}>{value}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menuList.map(({ link, value }) => (
            <li key={value} className={styles.item}>
              <a className={styles.link} href={link}>{value}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setMobileMenuActive(true)}
        type="button"
        className={styles.burger}
      >
        <img src={burger} alt="burger" />
      </button>
    </>
  );
};
