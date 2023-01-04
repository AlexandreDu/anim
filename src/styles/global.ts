import { createGlobalStyle } from 'styled-components';
import { headerHeight } from '../components/layout/header/styles';
export default createGlobalStyle`
   
    html {
        scroll-snap-type: y mandatory;
        scroll-padding: ${headerHeight} 0 0 0;
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
