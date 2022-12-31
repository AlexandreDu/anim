import { MotionPage } from '../components/motionPage';
import { Spacer } from '../components/spacer';
import { Stack } from '../components/stack';
import { Description } from '../components/description';
import { AnimatedHighlight } from '../components/highlight';

import {
  pageWrapperPaddingTop,
  pageWrapperPaddingBottom,
} from '../components/layout/styles';
import { switchHeight } from '../components/switch/styles';
import { footerHeight } from '../components/layout/footer/styles';

import { homeContent } from '../content/home';

import { useMedia } from '../hooks/useMedia';

export function Home() {
  const mdAndUp = useMedia('md');
  console.log('mdAndUp', mdAndUp);
  return (
    <MotionPage>
      <Spacer direction='vertical' space={mdAndUp ? 'none' : 'xl'} />
      <Stack direction='vertical' space={mdAndUp ? 'none' : '2xl'}>
        {homeContent.map(
          (
            {
              staticTitle,
              animatedTitle,
              colorOne,
              colorTwo,
              colorThree,
              content,
              links,
              linksColor,
              src,
            },
            index
          ) => {
            let minHeightToSubstract = pageWrapperPaddingTop;
            if (index === 0)
              minHeightToSubstract = `calc(${pageWrapperPaddingTop} + ${switchHeight})`;
            console.log(minHeightToSubstract);
            if (index === homeContent.length - 1)
              minHeightToSubstract = `calc( ${pageWrapperPaddingTop} + ${pageWrapperPaddingBottom} + ${footerHeight})`;
            return (
              <Description
                key={index}
                title={
                  <>
                    {staticTitle}{' '}
                    <AnimatedHighlight
                      colorOne={colorOne}
                      colorTwo={colorTwo}
                      colorThree={colorThree}
                    >
                      {animatedTitle}
                    </AnimatedHighlight>
                  </>
                }
                content={content}
                links={links}
                linksColor={linksColor}
                src={src}
                minHeightToSubstract={minHeightToSubstract}
              />
            );
          }
        )}
      </Stack>
    </MotionPage>
  );
}
