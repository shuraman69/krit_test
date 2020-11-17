import {
  About, Main, MobileApp, Support, ThankYouPage,
} from '../pages';

export const root = '/';

export const routes = [
  {
    id: 1,
    path: `${root}`,
    name: 'Main',
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
    path: `${root}mobile-app/`,
    name: '',
    exact: true,
    Сomponent: MobileApp,
    title: 'Mobile App',
    keywords: 'scratch.radio application',
    description: 'Mobile application description',
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
  {
    id: 5,
    path: `${root}support/thank-you-page/`,
    name: '',
    exact: true,
    Сomponent: ThankYouPage,
    title: 'Thank you page',
    keywords: 'support scratch.radio, donate, thank you',
    description: 'Donate to scratch.radio project, thank you',
  },
];
