import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title="Things to dream of" image="./src/images/hero_1.jpg" altImage="starring sky">
          <p>Never ending list of amazing things</p>
        </List>
      </main>
    );
  }
}

export default App;
