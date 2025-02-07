import { colors } from './foundations/colors';
import { typography } from './foundations/typography';
import { spacing } from './foundations/spacing';
import { breakpoints, mediaQueries } from './foundations/breakpoints';
import { sizes } from './foundations/sizes';
import { transitions } from './foundations/transitions';
import { opacities } from './foundations/opacities';

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  mediaQueries,
  sizes,
  transitions,
  opacities,
} as const;
