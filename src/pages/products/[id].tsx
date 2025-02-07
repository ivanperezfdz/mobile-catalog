import type {
  ColorOption,
  Phone,
  StorageOption,
} from '@/domain/phones/entities/Phone';
import { DetailLayout } from '@/ui/templates/DetailLayout/DetailLayout';
import { PhoneDetail } from '@/ui/organisms/PhoneDetail/PhoneDetail';
import { useCart } from '@/ui/hooks/useCart';
import { useEffect, useState } from 'react';
import { usePhones } from '@/ui/hooks/usePhones';
import { useRouter } from 'next/router';

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { loading: phoneLoading, getPhoneDetail } = usePhones();
  const { addItem, loading: cartLoading } = useCart();
  const [phone, setPhone] = useState<Phone | null>(null);

  useEffect(() => {
    if (id && typeof id === 'string') {
      void getPhoneDetail(id).then(setPhone);
    }
  }, [id, getPhoneDetail]);

  const handleAddToCart = async (
    color: ColorOption,
    storage: StorageOption
  ) => {
    if (!phone) return;
    if (!color || !storage) return;

    await addItem({
      phoneId: phone.id,
      name: phone.name,
      colorName: color.name,
      storageCapacity: storage.capacity,
      price: storage.price,
      quantity: 1,
      imageUrl: color.imageUrl || phone.imageUrl,
    });
    void router.push('/cart');
  };

  if (phoneLoading || !id) return null;

  return (
    <DetailLayout>
      {phone && (
        <PhoneDetail
          phone={phone}
          onAddToCart={handleAddToCart}
          loading={cartLoading}
        />
      )}
    </DetailLayout>
  );
}
