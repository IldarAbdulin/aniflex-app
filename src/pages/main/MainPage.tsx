import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { AnimeMain } from '../../components/main/main-anime/AnimeMain';

export const MainPage: React.FC = () => {
  return (
    <>
      {Cookies.get('token') && Cookies.get('user') ? (
        <>
          <Navigate to={`/main`} />
          <AnimeMain />
        </>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};
