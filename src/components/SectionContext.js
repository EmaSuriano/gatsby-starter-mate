// @flow

import * as React from 'react';
import { noop } from '../utils/utils';

const { Provider, Consumer } = React.createContext({
  sections: [],
  addSection: noop,
});

type SectionProps = {
  children: React.Node,
};

type SectionState = {
  sections: Array<string>,
};

export class SectionProvider extends React.Component<
  SectionProps,
  SectionState,
> {
  state = {
    sections: [],
  };

  addSection = (section: string) =>
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

export const SectionConsumer = Consumer;
