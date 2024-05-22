import { links } from './links';
import { IPublicRoutes } from '../types/types';
import { HomePage, SchedulePage, MainPage, NotFound } from '../pages';
import { SingleAnime } from '../components/single-anime/SingleAnime';
import { AnimeRandom } from '../components/random/AnimeRandom';

export const publicRoutes: IPublicRoutes[] = [
  {
    children: [
      {
        path: links.home,
        element: <HomePage />,
      },
      {
        path: links.main,
        element: <MainPage />,
      },
      {
        path: links.schedule,
        element: <SchedulePage />,
      },
      {
        path: links.random,
        element: <AnimeRandom />,
      },
      {
        path: links.mainAnime,
        element: <SingleAnime />,
      },
      {
        path: links.notFound,
        element: <NotFound />,
      },
    ],
  },
];
