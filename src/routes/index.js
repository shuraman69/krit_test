import {
  About, Main, Partners, Support,
} from '../pages';

export const root = '/';

export const routes = [
  {
    id: 1,
    path: `${root}`,
    name: '',
    exact: true,
    Сomponent: Main,
    title: 'Scratch.Radio',
    keywords: 'This project is designed to make scratch music more accessible.',
    description:
      'This project is designed to make scratch music more accessible.',
  },
  {
    id: 2,
    path: `${root}about/`,
    name: 'About',
    exact: true,
    Сomponent: About,
    title: 'About Scratch.Radio',
    keywords: 'about scratch.radio, privacy statement',
    description:
      'The authors of the project do not approve or call for anything, nor do they oppose or support it.',
  },
  {
    id: 3,
    path: `${root}partners/`,
    name: 'Partners',
    exact: true,
    Сomponent: Partners,
    title: 'Partners of Scratch.Radio',
    keywords: 'scratch.radio partners',
    description: 'Partners of scratch.radio',
  },
  {
    id: 4,
    path: `${root}support/`,
    name: 'Support',
    exact: true,
    Сomponent: Support,
    title: 'Support project',
    keywords: 'support scratch.radio, donate',
    description: 'Donate to scratch.radio project',
  },
];
