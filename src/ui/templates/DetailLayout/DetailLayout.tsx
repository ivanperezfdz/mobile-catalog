import { Button } from '@/ui/atoms/Button/Button.styles';
import { ChevronLeft } from 'lucide-react';
import type { DetailLayoutProps } from './DetailLayout.types';
import { SectionContainer } from '@/ui/atoms/SectionContainer/SectionContainer.styles';
import { Text } from '@/ui/atoms/Text/Text.styles';
import { useRouter } from 'next/router';
import * as S from './DetailLayout.styles';

export const DetailLayout = ({ children, onBack }: DetailLayoutProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <>
      <S.Header>
        <Button onClick={handleBack} $variant="default">
          <SectionContainer $gap="sm">
            <ChevronLeft size={16} />
            <Text
              color="primary"
              size="sm"
              $weight="medium"
              transform="uppercase"
            >
              Back
            </Text>
          </SectionContainer>
        </Button>
      </S.Header>
      <S.Main>{children}</S.Main>
    </>
  );
};
