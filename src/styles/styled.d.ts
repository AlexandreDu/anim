import {} from 'styled-components';
import { FullTheme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends FullTheme {}
}
