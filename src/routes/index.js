import { About, Main, Partners, Support } from '../pages/';

export const root = '/v2/build/';

export const routes = [
  {
    id: 1,
    path: `${root}`,
    name: 'Main',
    exact: false,
    component: Main,
  },
  {
    id: 2,
    path: `${root}about/`,
    name: 'About',
    exact: true,
    component: About,
  },
  {
    id: 3,
    path: `${root}partners/`,
    name: 'Partners',
    exact: true,
    component: Partners,
  },
  {
    id: 4,
    path: `${root}support/`,
    name: 'Support project',
    exact: true,
    component: Support,
  },
];
