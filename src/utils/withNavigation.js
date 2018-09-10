import React from 'react';
import { SectionConsumer } from '../components/SectionContext';

class AddSectionOnMount extends React.Component {
  componentDidMount() {
    const { addSection, navOptions } = this.props;
    addSection(navOptions);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const withNavigation = navOptions => Component => props => (
  <SectionConsumer>
    {({ addSection }) => (
      <AddSectionOnMount addSection={addSection} navOptions={navOptions}>
        <Component {...props} />
      </AddSectionOnMount>
    )}
  </SectionConsumer>
);

export default withNavigation;
