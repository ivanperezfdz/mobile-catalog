export type StorageOption = {
  capacity: string;
  price?: number;
};

export type StorageSelectorProps = {
  options: StorageOption[];
  selectedStorage?: string;
  onSelect: (storage: string) => void;
};
