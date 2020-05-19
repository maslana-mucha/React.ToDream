import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore';

class App extends React.Component {
  render() {
  //console.log(this);
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData}>
          <p>Never ending list of amazing things</p>
        </List>
      </main>
    );
  }
}

export default App;
