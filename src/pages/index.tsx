import { useTheme } from 'styled-components';

import { useMedia } from '../hooks/useMedia';

import { MotionPage } from '../components/motionPage';
import { Typography } from '../components/typography';
import { Svg } from '../components/svg';

import { headerHeight } from '../components/layout/header/styles';
import { pageWrapperPaddingBottom } from '../components/layout/styles';
import { footerHeight } from '../components/layout/footer/styles';

export function Home() {
  const theme = useTheme();
  const mdAndUp = useMedia('md');
  return (
    <MotionPage>
      <div
        style={{
          maxHeight: `calc(100vh - ${headerHeight} - ${
            mdAndUp ? '0vh' : theme.space.xl
          } - ${pageWrapperPaddingBottom} - ${footerHeight})`,
        }}
      >
        <Typography as="h1">Home</Typography>
        <Svg />
      </div>
    </MotionPage>
  );
}
