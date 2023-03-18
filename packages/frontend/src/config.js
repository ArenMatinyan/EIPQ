import trafficLogo from '../src/assets/images/traffic_logo.svg';
import overviewLogo from '../src/assets/images/overview_logo.svg';
import csvLogo from '../src/assets/images/CSV_logo.svg';
//ROUTES
import { ROUTER } from './router/router';
const { HOME_PAGE_ROUTE, OVERVIEW_PAGE_ROUTE, CSV_PAGE_ROUTE } = ROUTER;

export const CONFIG = {
  dashboardConfig: [
    {
      id: 1,
      title: 'Traffic',
      logo: trafficLogo,
      link: HOME_PAGE_ROUTE,
    },
    {
      id: 2,
      title: 'Overview',
      logo: overviewLogo,
      link: OVERVIEW_PAGE_ROUTE,
    },
    {
      id: 3,
      title: 'CSV',
      logo: csvLogo,
      link: CSV_PAGE_ROUTE,
    },
  ],
  filterConfig: [
    {
      id: 1,
      placeholder: 'Start address',
      type: 'select',
    },
    {
      id: 2,
      placeholder: 'End address',
      type: 'select',
    },
    {
      id: 3,
      placeholder: 'Work load index from 22',
      type: 'input',
    },
    {
      id: 4,
      placeholder: 'Work load index to 100',
      type: 'input',
    },
    {
      id: 5,
      placeholder: 'Usage index from 12',
      type: 'input',
    },
    { id: 6, placeholder: 'Usage index to 100', type: 'input' },
  ],
};
