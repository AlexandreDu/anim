import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from '../../pages';
import { Paintings } from '../../pages/paintings';
import { About } from '../../pages/about';

import { scrollToTop } from '../../../utils/scrollToTop/index';

export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/paintings'} element={<Paintings />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
