import { LinkProps } from '../types/index';

import { MotionPage } from '../components/motionPage';
import { Description } from '../components/description';
import { AnimatedHighlight } from '../components/highlight';

import artOnePic from '../assets/images/art-1.jpg';
import artTwoPic from '../assets/images/art-2.jpg';
import artThreePic from '../assets/images/art-3.jpg';

const linksData: LinkProps[] = [
  { children: 'About', to: '/about' },
  { children: 'Test', to: '/test' },
];

export const Home: React.FC = () => {
  return (
    <MotionPage>
      <Description
        title={
          <>
            Framer{' '}
            <AnimatedHighlight
              colorOne="#ffffff"
              colorTwo="#c1b"
              colorThree="#72f"
            >
              Motion
            </AnimatedHighlight>
          </>
        }
        content={
          'A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.'
        }
        links={linksData}
        src={artOnePic}
      />

      <Description
        title={
          <>
            ZZZZZ{' '}
            <AnimatedHighlight
              colorOne="#ffffff"
              colorTwo="#ef270a"
              colorThree="#7ac201"
            >
              Motion
            </AnimatedHighlight>
          </>
        }
        content={
          'A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.'
        }
        links={linksData}
        src={artTwoPic}
      />

      <Description
        title={
          <>
            Framer{' '}
            <AnimatedHighlight
              colorOne="#ffffff"
              colorTwo="#5b9fad"
              colorThree="#bc5624"
            >
              Motion
            </AnimatedHighlight>
          </>
        }
        content={
          'A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.'
        }
        links={linksData}
        src={artThreePic}
      />
    </MotionPage>
  );
};
