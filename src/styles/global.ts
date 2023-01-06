import { createGlobalStyle } from 'styled-components';
import { headerHeight } from '../components/layout/header/styles';
export default createGlobalStyle`
    ::-webkit-scrollbar {
        width: 0.75em;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.lightDark};
        margin-block: 0.5em;
        border-radius: 100vw;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.fushia};
        border-radius: 100vw;
       
    }
    @supports (scrollbar-color: ${({ theme }) =>
      `${theme.colors.fushia} ${theme.colors.lightDark}`}) {
        * {
            scrollbar-color: ${({ theme }) =>
              `${theme.colors.fushia} ${theme.colors.lightDark}`};
            scrollbar-width: thin;
        }
    }
   
    html {
        scroll-snap-type: y mandatory;
        scroll-padding: ${headerHeight} 0 0 0;
    }
    body {
        background-color: ${({ theme }) => theme.colors.background}
    }
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Mukta Mahee', sans-serif;
    }
    #root{
        margin:0 auto;
    }
`;
