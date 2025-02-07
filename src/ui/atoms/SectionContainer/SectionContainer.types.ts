import type { spacing } from '@/ui/styles/theme/foundations/spacing';

export type SectionContainerDirection = 'row' | 'column';
export type SectionContainerGap = keyof typeof spacing;

export type SectionContainerProps = {
  direction?: SectionContainerDirection;
  $gap?: SectionContainerGap;
  children: React.ReactNode;
};
