import type {
  ColorOption,
  Phone,
  StorageOption,
} from '@/domain/phones/entities/Phone';

export type PhoneDetailProps = {
  phone: Phone;
  onAddToCart: (color: ColorOption, storage: StorageOption) => Promise<void>;
  loading?: boolean;
};
