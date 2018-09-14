import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../utils/utils';

const { Provider, Consumer } = React.createContext({
  sections: [],
  addSection: noop,
});

export class SectionProvider extends React.Component {
  state = {
    sections: [],
  };

  addSection = section =>
    this.setState(state => {
      const { sections } = state;
      return { sections: [...sections, section] };
    });

  render() {
    const { sections } = this.state;
    const { children } = this.props;
    const value = {
      sections,
      addSection: this.addSection,
    };

    return <Provider value={value}>{children}</Provider>;
  }
}

SectionProvider.propTypes = {
  children: PropTypes.node,
};

export const SectionConsumer = Consumer;
