import React from 'react';
import styles from './Info.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { info } from '../../data/dataStore';

const Info = () => (
  <Container>
    <section className={styles.component}>
      <Hero title={info.title} image={info.image} altImage={info.altImage} />
      <div className={styles.description}>{info.description}</div>
      <div>
        <p>{info.context}</p>
      </div>
    </section>
  </Container>
);

export default Info;
