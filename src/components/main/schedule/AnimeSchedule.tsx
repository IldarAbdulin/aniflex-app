import React from 'react';
import Cookies from 'js-cookie';
import { Box, useMediaQuery } from '@mui/material';
import { AnimeHeader } from '../header/AnimeHeader';
import { useTheme } from '../../../hooks/useTheme';
import { AnimeFooter } from '../footer/AnimeFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AnimeCard } from '../anime-card/AnimeCard';
import { Loader } from '../../../ui/Loader';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { getScheduleArr } from '../../../redux/slices/anime-schedule-slice';

export const AnimeSchedule = () => {
  const { isLight, setIsLight } = useTheme();
  const { schedules, loading, error } = useAppSelector(
    ({ shedule }) => shedule
  );
  const media865 = useMediaQuery('(max-width: 865px)');
  const media340 = useMediaQuery('(max-width: 340px)');
  const dispatch = useAppDispatch();
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
    dispatch(getScheduleArr([]));
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
        <Box className="card-main__links">
          <NavLink to={`/main`}>Главная</NavLink>
          <NavLink to={`/schedule`}>Даты новых серий</NavLink>
          <NavLink to={`/random`}>Случайное</NavLink>
        </Box>
        {error && (
          <Box className="manga__all-loader" style={{ height: '46vh' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#ff595c' }}>
              {error}
            </p>
          </Box>
        )}
        {loading && (
          <Box className="manga__all-loader" style={{ height: '46vh' }}>
            <Loader />
          </Box>
        )}
        {schedules.length ? (
          <Box className="card-main">
            <h1>Расписание выхода новых серий:</h1>
            <Box>
              <Box className="card-main__swiper-main">
                <h2>Понедельник:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                >
                  <Box className="card-main__anime">
                    {schedules[0]?.list &&
                      schedules[0].list.map((item) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Вторник:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                  autoplay
                >
                  <Box className="card-main__anime">
                    {schedules[1]?.list &&
                      schedules[1].list.map((item) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Среда:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                  autoplay
                >
                  <Box className="card-main__anime">
                    {schedules[2]?.list &&
                      schedules[2].list.map((item) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Четверг:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                  autoplay
                >
                  <Box className="card-main__anime">
                    {schedules[3]?.list &&
                      schedules[3].list.map((item: any) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Пятница:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                  autoplay
                >
                  <Box className="card-main__anime">
                    {schedules[4]?.list &&
                      schedules[4].list.map((item) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Суббота:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                  autoplay
                >
                  <Box className="card-main__anime">
                    {schedules[5]?.list &&
                      schedules[5].list.map((item) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
            <Box>
              <Box>
                <h2>Воскресенье:</h2>
                <Swiper
                  className="swiper"
                  width={media865 ? 770 : 870}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={media340 ? 3.2 : 3.1}
                  navigation
                  autoplay
                >
                  <Box className="card-main__anime">
                    {schedules[6]?.list &&
                      schedules[6].list.map((item) => (
                        <SwiperSlide key={item.id} className="slider">
                          <AnimeCard
                            id={item.id}
                            porster={item.posters?.original.url}
                            title={item.names?.ru}
                            code={item.code}
                          />
                        </SwiperSlide>
                      ))}
                  </Box>
                </Swiper>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <AnimeFooter />
    </>
  );
};
