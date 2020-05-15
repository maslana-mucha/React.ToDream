import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    image: PropTypes.string,
    altImage: PropTypes.string,
    columns: PropTypes.array,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  addColumn(title) {
    console.log(this);
    this.setState((state) => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }

  render() {
    //console.log(this);
    return (
      <section className={styles.component}>
        <Hero
          title={this.props.title}
          image={this.props.image}
          altImage={this.props.altImage}
        />
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addColumn(title)}
          />
        </div>
      </section>
    );
  }
}

export default List;