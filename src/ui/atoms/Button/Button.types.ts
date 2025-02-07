export type ButtonVariant = 'primary' | 'secondary' | 'default';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
  $variant?: ButtonVariant;
  size?: ButtonSize;
  $$fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => Promise<void> | void;
};
