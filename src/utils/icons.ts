import {
  library,
  IconName,
  findIconDefinition,
  IconDefinition,
  IconPack,
} from '@fortawesome/fontawesome-svg-core';
import { prefix as brandPrefix } from '@fortawesome/free-brands-svg-icons';
import { prefix as basePrefix } from '@fortawesome/free-solid-svg-icons';
import { ICONS } from '../icons';

type IconDefinitionOrPack = IconDefinition | IconPack;
export const loadIcons = () =>
  library.add(...(ICONS as IconDefinitionOrPack[]));

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
