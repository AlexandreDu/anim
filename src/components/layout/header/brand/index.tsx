import { useContext } from 'react';
import {
  DarkModeContext,
  DarkModeUpdateContext,
} from '../../../themesProvider';

import * as Styled from './styles';

import { Switch } from '../../../switch';

import { MdNightlight } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

import styled from 'styled-components';
const BottomRight = styled.div`
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
`;
export function Brand() {
  const darkMode = useContext(DarkModeContext);
  const toggleDarkMode = useContext(DarkModeUpdateContext);
  return (
    <Styled.Brand>
      <Styled.Title>Art</Styled.Title>
      <BottomRight>
        <Switch
          on={darkMode}
          setOn={toggleDarkMode}
          onIcon={<MdNightlight />}
          offIcon={<BsFillSunFill />}
        />
      </BottomRight>
    </Styled.Brand>
  );
}
