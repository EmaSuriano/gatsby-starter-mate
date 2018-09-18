import React from 'react';
import PropTypes from 'prop-types';
import { SectionConsumer } from '../components/SectionContext';

class AddSectionOnMount extends React.Component {
  static propTypes = {
    addSection: PropTypes.func.isRequired,
    navOptions: PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
    }),
    children: PropTypes.node,
  };

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
