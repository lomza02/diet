import { DESKTOP_WIDTH, TABLET_WIDTH } from './constants';
const size = {
  tablet: `${TABLET_WIDTH}px`,
  desktop: `${DESKTOP_WIDTH}px`,
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
