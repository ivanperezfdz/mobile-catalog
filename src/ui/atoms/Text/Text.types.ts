import type { typography } from '@/ui/styles/theme/foundations/typography';
import type { colors } from '@/ui/styles/theme/foundations/colors';
import type { JSX } from 'react';

export type TextSize = keyof typeof typography.size;
export type TextWeight = keyof typeof typography.weight;
export type TextColor = keyof typeof colors.text;

export type TextProps = {
  size?: TextSize;
  $weight?: TextWeight;
  color?: TextColor;
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
};
