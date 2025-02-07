export type ColorSelectorProps = {
  options: Array<{ name: string; hexCode: string }>;
  selectedColor?: string;
  onSelect: (color: string) => void;
};
