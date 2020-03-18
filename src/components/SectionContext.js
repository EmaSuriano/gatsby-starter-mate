import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SectionContext = React.createContext({
  sections: [],
  addSection: () => false,
});

export const SectionProvider = ({ children }) => {
  const [sections, setSections] = useState([]);
  const contextValue = {
    sections,
    addSection: section => setSections([...sections, section]),
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};

SectionProvider.propTypes = {
  children: PropTypes.node,
};

export const SectionConsumer = SectionContext.Consumer;
