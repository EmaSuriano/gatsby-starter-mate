import { SECTION } from './constants';

export const getSectionHref = (section: SECTION) => {
  return Object.keys(SECTION)[Object.values(SECTION).indexOf(section)];
};
