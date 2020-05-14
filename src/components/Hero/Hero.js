import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <img className={styles.image} src="/images/hero_1.jpg" alt="things to do" />
  </header>
);

export default Hero;
