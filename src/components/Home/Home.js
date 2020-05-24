import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addListLink: PropTypes.func,
  };

  render() {
    console.log(this);
    const { title, subtitle, lists, addListLink } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map((listData) => (
          <ListLink key={listData.id} {...listData} />
        ))}
        <div>
          <Creator text={settings.listCreatorText} action={addListLink} />
        </div>
      </main>
    );
  }
}

export default Home;
