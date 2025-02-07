import { Container } from '@/ui/atoms/Container/Container.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import { CartList } from '@/ui/organisms/CartList/CartList';
import { CartFooter } from '@/ui/organisms/CartFooter/CartFooter';
import { useCart } from '@/ui/hooks/useCart';
import { useTranslation } from '@/ui/hooks/useTranslation';
import { useRouter } from 'next/router';

const CartPage = () => {
  const { cart, removeItem, loading } = useCart();
  const { t } = useTranslation();
  const router = useRouter();

  const handleContinueShopping = () => {
    void router.push('/');
  };

  const handlePay = () => {
    alert('To-do...');
  };

  return (
    <Container $maxWidth="xl">
      <SectionContainer
        direction="column"
        $gap="4xl"
        style={{ paddingBottom: '120px' }}
      >
        <Text size="2xl" transform="uppercase">
          {t('common.cart')} ({cart.items.length})
        </Text>

        {cart.items.length > 0 ? (
          <CartList
            items={cart.items}
            onRemoveItem={removeItem}
            loading={loading}
          />
        ) : null}
        <CartFooter
          total={cart.total}
          onContinue={handleContinueShopping}
          onPay={handlePay}
        />
      </SectionContainer>
    </Container>
  );
};

export default CartPage;
