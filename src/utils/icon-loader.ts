import {
  library,
  IconName,
  findIconDefinition,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import {
  faMedium,
  faTwitter,
  faGithub,
  prefix as brandPrefix,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faEnvelope,
  faCoffee,
  prefix as basePrefix,
} from '@fortawesome/free-solid-svg-icons';

export const loadIcons = () =>
  library.add(faMedium, faTwitter, faGithub, faGlobe, faEnvelope, faCoffee);

export const getIconDefinition = (
  iconName: IconName,
): IconDefinition | null => {
  return [brandPrefix, basePrefix].reduce(
    (acc: IconDefinition | null, prefix) => {
      return acc || findIconDefinition({ prefix, iconName });
    },
    null,
  );
};
