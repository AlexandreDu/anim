import { LinkProps } from '../types/index';

import styled from 'styled-components';
import { Description } from '../components/description';

import { motion, useInView } from 'framer-motion';

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
                background: `linear-gradient(145deg, #72f, #c1b)`,
                x: 0,
              }}
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
      />
    </>
  );
};
