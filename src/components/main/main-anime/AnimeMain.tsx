import React from 'react';
import Cookies from 'js-cookie';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getSearch } from '../../../api';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Box,
  Pagination,
  PaginationItem,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { AnimeHeader } from '../header/AnimeHeader';
import { useTheme } from '../../../hooks/useTheme';
import { AnimeFooter } from '../footer/AnimeFooter';
import { AnimeCard } from '../anime-card/AnimeCard';
import { Loader } from '../../../ui/Loader';
import { Root } from '../../../types/anime-updates-types';
import { AnimeFilter } from '../anime-filter/AnimeFilter';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { getAnimeChanges } from '../../../redux/slices/anime-changes-slice';

export const AnimeMain = () => {
  const location = useLocation();
  const { isLight, setIsLight } = useTheme();
  const { changes, error, loading } = useAppSelector(({ changes }) => changes);
  const dispatch = useAppDispatch();
  const media340 = useMediaQuery('(max-width:340px)');

  const [searchName, setSearchName] = React.useState<string>('');
  const [searchParamArr, setSearchParamArr] = React.useState<Root>();
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>('');
  const [activePage, setActivePage] = React.useState<number>(
    parseInt(`${location.search?.split('=')[1] || 1}`)
  );

  const createSearch = async () => {
    if (searchName !== '') {
      setIsLoad(true);
      setTimeout(async () => {
        const timeoutSearch = await getSearch(
          searchName,
          searchParamArr?.pagination?.total_items &&
            searchParamArr?.pagination?.total_items
        );
        timeoutSearch && setSearchParamArr(timeoutSearch);
        setIsLoad(false);
      }, 500);
    } else {
      setIsLoad(false);
      setSearchParamArr(undefined);
    }
  };
  const onSearch = () => {
    createSearch();
  };

  const onChanges = () => {
    if (searchName === '') {
      dispatch(getAnimeChanges(activePage));
    }
  };

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

  const theme = createTheme({
    palette: {
      success: {
        main: isLight ? '#fff' : '#fff',
        contrastText: isLight ? '#232323' : '#232323',
      },
    },
  });

  React.useEffect(() => {
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
    onChanges();
    defaultTheme();
  }, [activePage, dispatch]);

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
            <NavLink to={`/schedule`}>Даты новых серий</NavLink>
            <NavLink to={`/random`}>Случайное</NavLink>
          </Box>
        </Box>
      </Box>
      <h1
        className="manga__main-h1"
        style={{
          margin: '0 0 -30px 0',
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        Недавно вышедшие:
      </h1>
      <Box className="manga">
        <Box>
          <AnimeFilter
            onSearch={onSearch}
            isLight={isLight}
            searchName={searchName}
            setSearchName={setSearchName}
          />
        </Box>
        {loading && (
          <Box className="manga__all-loader" style={{ height: '70vh' }}>
            <Loader />
          </Box>
        )}
        {isLoad && (
          <Box className="manga__all-loader" style={{ height: '70vh' }}>
            <Loader />
          </Box>
        )}
        {error && (
          <Box className="manga__all-loader" style={{ height: '30vh' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#ff595c' }}>
              {error}
            </p>
          </Box>
        )}
        {searchParamArr?.list?.length === 0 && (
          <Box className="manga__all-loader" style={{ height: '30vh' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#ff595c' }}>
              По вашему запросу ничего не найдено :(
            </p>
          </Box>
        )}
        {!searchParamArr?.list ? (
          <>
            <Box className="card-main">
              <Box className="card-main__anime">
                {changes?.list &&
                  changes.list.map((item: any) => (
                    <AnimeCard
                      key={item.id}
                      id={item.id}
                      porster={item.posters?.original.url}
                      title={item.names?.ru}
                      code={item.code}
                    />
                  ))}
              </Box>
              <Box
                className="pagination"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ThemeProvider theme={theme}>
                  <Stack
                    spacing={2}
                    sx={{ color: '#fff', padding: '20px 0 0 0' }}
                  >
                    <Pagination
                      color={isLight ? 'standard' : 'primary'}
                      siblingCount={0}
                      size="small"
                      count={changes.pagination?.pages}
                      page={activePage}
                      onChange={(_, num) => setActivePage(num)}
                      showFirstButton={media340 ? false : true}
                      showLastButton={media340 ? false : true}
                      renderItem={(item: any) => (
                        <PaginationItem
                          sx={{
                            color: '#A5A5A5',
                            fontSize: '19px',
                            fontWeight: '300',
                          }}
                          component={Link}
                          to={`/main?_page=${item.page}`}
                          {...item}
                        />
                      )}
                    />
                  </Stack>
                </ThemeProvider>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box className="card-main">
              <Box className="card-main__anime">
                {searchParamArr?.list &&
                  searchParamArr.list.map((item) => (
                    <AnimeCard
                      key={item.id}
                      id={item.id}
                      porster={item.posters?.original.url}
                      title={item.names?.ru}
                      code={item.code}
                    />
                  ))}
              </Box>
            </Box>
          </>
        )}
      </Box>
      <AnimeFooter />
    </>
  );
};
