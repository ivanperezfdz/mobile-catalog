import type { ErrorMessageProps } from './ErrorMessage.types';
import { Text } from '../Text/Text.styles';
import { useTranslation } from '@/ui/hooks/useTranslation';
import * as S from './ErrorMessage.styles';

export const ErrorMessage = ({
  title,
  description,
  children,
}: ErrorMessageProps) => {
  const { t } = useTranslation();

  return (
    <S.ErrorContainer data-testid="error-message">
      <Text size="2xl" transform="uppercase">
        {title || t('error.defaultTitle')}
      </Text>
      {description && <Text size="lg">{description}</Text>}
      {children}
    </S.ErrorContainer>
  );
};
