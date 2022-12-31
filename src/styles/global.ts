import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@800&display=swap');
    html {
        scroll-snap-type: y mandatory;
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
