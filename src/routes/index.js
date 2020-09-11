import { About, Main, Partners, Support } from '../pages/';

export const root = '/v2/build/';

export const routes = [
  {
    id: 1,
    path: `${root}`,
    name: 'Main',
    exact: false,
    Сomponent: Main,
    title: 'Scratch.Radio',
    keywords: 'This project is designed to make cool music more accessible.',
    description: 'This project is designed to make cool music more accessible.',
  },
  {
    id: 2,
    path: `${root}about/`,
    name: 'About',
    exact: true,
    Сomponent: About,
    title: 'About',
    keywords: 'This project is designed to make cool music more accessible.',
    description: 'This project is designed to make cool music more accessible.',
  },
  {
    id: 3,
    path: `${root}partners/`,
    name: 'Partners',
    exact: true,
    Сomponent: Partners,
    title: 'Partners',
    keywords: 'This project is designed to make cool music more accessible.',
    description: 'This project is designed to make cool music more accessible.',
  },
  {
    id: 4,
    path: `${root}support/`,
    name: 'Support project',
    exact: true,
    Сomponent: Support,
    title: 'Support project',
    keywords: 'This project is designed to make cool music more accessible.',
    description: 'This project is designed to make cool music more accessible.',
  },
];
