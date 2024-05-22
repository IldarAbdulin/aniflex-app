import React from 'react';
import Cookies from 'js-cookie';
import { Box } from '@mui/material';
import { AnimeHeader } from '../../components/main/header/AnimeHeader';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { AnimeFooter } from '../../components/main/footer/AnimeFooter';

export const NotFound = () => {
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');
  const changeTheme = () => {
    if (isLight === true) localStorage.setItem('Theme', 'Dark');
    else if (isLight === false) localStorage.setItem('Theme', 'Light');
    setIsLight?.(!isLight);
  };
  const defaultTheme = () => {
    const value = localStorage.getItem('Theme');
    if (value === 'Dark') {
      setIsLight?.(false);
    } else if (value === 'Light') {
      setIsLight?.(true);
    }
  };
  React.useEffect(() => {
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
    defaultTheme();
  }, []);
  return (
    <>
      <Box className="manga">
        <AnimeHeader
          isLight={isLight}
          changeTheme={changeTheme}
          userName={userName}
        />
        <Box className="card-main">
          <Box className="card-main__links">
            <NavLink to={`/main`}>Главная</NavLink>
            <NavLink to={`/schedule`}>Расписание новых серий</NavLink>
            <NavLink to={`/random`}>Случайное аниме</NavLink>
          </Box>
        </Box>
      </Box>
      <Box className="manga" sx={{ height: '45.5vh', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '30px',
            fontWeight: '500',
            color: '#ff595c',
            letterSpacing: '1.5px',
          }}
        >
          Ошибка 404
        </h1>
        <p style={{ width: '70%', margin: '20px auto', fontWeight: '400' }}>
          Кажется что то пошло не так! Страница, которую вы запрашиваете, не
          существует. Возможно она устарела, была удалена, или был введен
          неверный адрес в адресной строке
        </p>
        <Link className="not-found-link" to={`/main`}>
          Вернуться назад
        </Link>
      </Box>
      <AnimeFooter />
    </>
  );
};
