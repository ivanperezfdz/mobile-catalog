import { Button } from '@/ui/atoms/Button/Button.styles';
import type { ErrorCode } from '@/ui/hooks/useErrorHandler';
import { ErrorMessage } from '@/ui/atoms/ErrorMessage/ErrorMessage';
import { useRouter } from 'next/router';
import { useTranslation } from '@/ui/hooks/useTranslation';

export default function ErrorPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const { code } = router.query;
  const errorCode = (code as ErrorCode) || 'DEFAULT';

  return (
    <ErrorMessage
      title={t(`error.${errorCode}.title`)}
      description={t(`error.${errorCode}.message`)}
    >
      <Button
        onClick={() => void router.push('/')}
        $variant="primary"
        size="large"
      >
        {t('common.backToHome')}
      </Button>
    </ErrorMessage>
  );
}
