import { Button } from '@/ui/atoms/Button/Button.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useTranslation } from '@/ui/hooks/useTranslation';
import type { CartFooterProps } from './CartFooter.types';
import * as S from './CartFooter.styles';

export const CartFooter = ({ total, onContinue, onPay }: CartFooterProps) => {
  const { t } = useTranslation();

  return (
    <S.Footer>
      <S.ContinueButtonWrapper>
        <Button
          $variant="secondary"
          onClick={onContinue}
          size="large"
          $$fullWidth
        >
          <Text size="sm" transform="uppercase">
            {t('common.continueShopping')}
          </Text>
        </Button>
      </S.ContinueButtonWrapper>

      {total > 0 && (
        <>
          <S.TotalContainer>
            <Text size="sm" transform="uppercase">
              {t('common.total')}
            </Text>
            <Text size="sm" transform="uppercase">
              {total} EUR
            </Text>
          </S.TotalContainer>

          <S.PayButtonWrapper>
            <Button $variant="primary" onClick={onPay} size="large" $$fullWidth>
              <Text size="sm" transform="uppercase" color="white">
                {t('common.pay')}
              </Text>
            </Button>
          </S.PayButtonWrapper>
        </>
      )}
    </S.Footer>
  );
};
