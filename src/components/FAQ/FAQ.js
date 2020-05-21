import styles from './FAQ.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <section className={styles.component}>
      <Hero
        title={faqData.title}
        image={faqData.image}
        altImage={faqData.altImage}
      />
      <div className={styles.description}>{faqData.description}</div>
      <div>
        <p>{faqData.context}</p>
      </div>
    </section>
  </Container>
);

export default FAQ;
