import artOnePic from '../../assets/images/art-1.jpg';
import artTwoPic from '../../assets/images/art-2.jpg';
import artThreePic from '../../assets/images/art-3.jpg';

export const paintingsContent = [
  {
    staticTitle: 'Painting',
    animatedTitle: '#1',
    colorOne: '#ffffff',
    colorTwo: '#c1b',
    colorThree: '#72f',
    content:
      'This an abstract painting with purple, fuchsia and some blue colors. ',
    links: [{ children: 'About', to: '/about' }],
    linksColor: '#c1b',
    src: artOnePic,
    id: '1',
  },
  {
    staticTitle: 'Painting',
    animatedTitle: '#2',
    colorOne: '#ffffff',
    colorTwo: '#ef270a',
    colorThree: '#7ac201',
    content: 'This an abstract painting with red, yellow and green colors. ',
    links: [{ children: 'About', to: '/about' }],
    linksColor: '#ef270a',
    src: artTwoPic,
    id: '2',
  },
  {
    staticTitle: 'Painting',
    animatedTitle: '#3',
    colorOne: '#ffffff',
    colorTwo: '#5b9fad',
    colorThree: '#bc5624',
    content: 'This an abstract painting with blue, orange and white colors. ',
    links: [{ children: 'About', to: '/about' }],
    linksColor: '#5b9fad',
    src: artThreePic,
    id: '3',
  },
];
