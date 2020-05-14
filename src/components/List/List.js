import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    altImage: PropTypes.string,
  };

  static defaultProps = {
    children: <p>Happy chappy me</p>,
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero
          titleText={this.props.title}
          image={this.props.image}
          altImage={this.props.altImage}
        />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title="For myself" />
          <Column title="For you" />
          <Column title="For us" />
        </div>
      </section>
    );
  }
}

export default List;