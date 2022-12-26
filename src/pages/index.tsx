
import { MotionPage } from '../components/motionPage';
import { Spacer } from '../components/spacer';
import { Stack } from '../components/stack';
import { Description } from '../components/description';
import { AnimatedHighlight } from '../components/highlight';

import { content } from '../content/home';


export const Home: React.FC = () => {
  return (
    <MotionPage>
      <Spacer direction='vertical' space='xl'/>
      <Stack direction='vertical' space='2xl'>
        {content.map(
          ({staticTitle, 
            animatedTitle, 
            colorOne, 
            colorTwo, 
            colorThree, 
            content, 
            links, 
            src 
          }) => (
          <Description
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
            src={src}
          />
        ))}
      </Stack>
    </MotionPage>
  );
};
