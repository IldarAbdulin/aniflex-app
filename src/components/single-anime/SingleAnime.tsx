import React from 'react';
import Cookies from 'js-cookie';
import { NavLink, useParams } from 'react-router-dom';
import { AnimeHeader } from '../main/header/AnimeHeader';
import { useTheme } from '../../hooks/useTheme';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { AnimeFooter } from '../main/footer/AnimeFooter';
import { SingleHeadInfo } from './SingleHeadInfo';
import ReactPlayer from 'react-player';
import { Loader } from '../../ui/Loader';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getAnimeTitle } from '../../redux/slices/anime-title-slice';

export const SingleAnime = () => {
  const { isLight, setIsLight } = useTheme();
  const [userName, setUserName] = React.useState<string>('');
  const { title, error, loading } = useAppSelector(({ title }) => title);
  const dispath = useAppDispatch();
  const [activeEpisode, setActiveEpisode] = React.useState<string>('1');
  const { code } = useParams();

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
    dispath(getAnimeTitle(code));
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setUserName(`${username}`);
    }
    defaultTheme();
  }, [code]);
  return (
    <>
      <Box className="manga-single">
        <AnimeHeader
          isLight={isLight}
          changeTheme={changeTheme}
          userName={userName}
        />
        {loading && (
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
        {title.posters?.original.url && (
          <>
            <SingleHeadInfo
              str={title.season?.string}
              year={title.season?.year}
              type={title.type?.full_string}
              porster={title.posters?.original.url}
              status={title.status?.string}
              episodes={title.player?.list.length}
              desc={title.description}
              favorites={title.in_favorites}
              genre={title.genres}
              isLight={isLight}
              title={title.names?.ru}
            />
            <Box id="watch" className="manga-single_watch-anime">
              <p>Смотреть: "{title && title.names?.ru}"</p>
              <Box
                className="manga-single__season"
                sx={{ padding: '30px 0 5px 0' }}
              >
                {title?.franchises?.map((rel) =>
                  rel.releases.map((item) => (
                    <NavLink to={`/main/${item.code}`} key={item.id}>
                      Сезон: {item.ordinal}
                    </NavLink>
                  ))
                )}
              </Box>
              <FormControl
                sx={{
                  mt: 2,
                  width: 200,
                  color: '#fff',
                }}
              >
                <Select
                  defaultValue=""
                  variant="outlined"
                  sx={{
                    color: isLight ? '#232323' : '#d0d0d0',
                  }}
                  value={activeEpisode}
                  onChange={(e) => setActiveEpisode(e.target.value)}
                >
                  <MenuItem
                    disabled
                    defaultValue="Выбрать серию"
                    sx={{ color: '#232323' }}
                  >
                    Выбрать серию
                  </MenuItem>
                  {title?.player?.list.map((ep) => (
                    <MenuItem key={ep.episode} value={ep.episode}>
                      Серия: {ep.episode}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ padding: '20px 0' }}>
              {title?.player?.list.map(
                (ep) =>
                  ep.episode === Number(activeEpisode) && (
                    <ReactPlayer
                      key={ep.uuid}
                      width={'100%'}
                      height={'100%'}
                      controls
                      url={`https://cache.libria.fun${ep.hls.hd}`}
                    />
                  )
              )}
            </Box>
          </>
        )}
      </Box>
      <AnimeFooter />
    </>
  );
};
