import { MotionPage } from '../components/motionPage';
import { Spacer } from '../components/spacer';
import { Stack } from '../components/stack';
import { Description } from '../components/description';
import { AnimatedHighlight } from '../components/highlight';

import { content } from '../content/home';

import { useMedia } from '../hooks/useMedia';
export function Home() {
  const mdAndUp = useMedia('md');
  console.log('mdAndUp', mdAndUp);
  return (
    <MotionPage>
      <Spacer direction='vertical' space='xl' />
      <Stack direction='vertical' space='2xl'>
        {content.map(
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
              />
            );
          }
        )}
      </Stack>
    </MotionPage>
  );
}
