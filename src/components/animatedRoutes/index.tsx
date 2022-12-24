import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import { Home } from '../../pages';
import { About } from '../../pages/about';

export const AnimatedRoutes: React.FC = () => {

    const location= useLocation()
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}