import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
};

type NavigationFunction = (id: string) => string;

