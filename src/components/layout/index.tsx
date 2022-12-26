import type { LayoutProps } from '../../types';

import * as Styled from './styles';

import { Header } from './header';
import { Switch } from '../switch';
import { Footer } from './footer';

import { MdNightlight } from 'react-icons/md';

import { BsFillSunFill } from 'react-icons/bs'
export const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  setDarkMode,
}) => {


  return (
    <Styled.Layout>
      <Header />
      <Styled.PageWrapper>
        <Switch on={darkMode} setOn={setDarkMode} onIcon={<MdNightlight />} offIcon={<BsFillSunFill/>} />
        {children}
      </Styled.PageWrapper>
      <Footer />
    </Styled.Layout>
  );
};
