import { LinkProps } from '../types/index';

import styled from 'styled-components';
import { Description } from '../components/description';

import { motion } from 'framer-motion';

import artOnePic from '../assets/images/art-1.jpg';
import artTwoPic from '../assets/images/art-2.jpg';
import artThreePic from '../assets/images/art-3.jpg';

const linksData: LinkProps[] = [
  { children: 'About', to: '/about' },
  { children: 'Test', to: '/test' },
];

const StyledHighlight = styled(motion.span)<{ linearColor: string }>``;

export const Home: React.FC = () => {
  return (
    <>
      <Description
        title={
          <>
            Framer{' '}
            <StyledHighlight
              initial={{
                background: 'linear-gradient(145deg, #ffffff, #c1b)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                x: 20,
              }}
              whileInView={{
                background: `linear-gradient(145deg, #c1b, #72f)`,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 0.75 }}
              linearColor={'#72f'}
            >
              Motion
            </StyledHighlight>
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
            <StyledHighlight
              initial={{
                background: 'linear-gradient(145deg, #ffffff, #ef270a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                x: 20,
              }}
              whileInView={{
                background: `linear-gradient(145deg, #ef270a, #7ac201)`,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 0.75 }}
              linearColor={'#72f'}
            >
              ZZZZ
            </StyledHighlight>
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
            <StyledHighlight
              initial={{
                background: 'linear-gradient(145deg, #ffffff, #5b9fad)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                x: 20,
              }}
              whileInView={{
                background: `linear-gradient(145deg, #5b9fad, #bc5624)`,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 0.75 }}
              linearColor={'#72f'}
            >
              Motion
            </StyledHighlight>
          </>
        }
        content={
          'A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.'
        }
        links={linksData}
        src={artThreePic}
      />
    </>
  );
};
