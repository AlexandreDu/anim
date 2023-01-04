import { MotionPage } from '../components/motionPage';
import { Typography } from '../components/typography';
import { Svg } from '../components/svg';

import { headerHeight } from '../components/layout/header/styles';
import { footerHeight } from '../components/layout/footer/styles';
import styled from 'styled-components';

export function Home() {
  return (
    <MotionPage>
      <div
        style={{ maxHeight: `calc(100vh - ${headerHeight} -${footerHeight})` }}
      >
        <Typography as="h1">Home</Typography>
        <Svg />
      </div>
    </MotionPage>
  );
}
