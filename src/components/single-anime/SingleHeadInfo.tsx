import { Box } from '@mui/material';

interface IAnimeCard {
  isLight: boolean;
  porster: string | undefined;
  title?: string | undefined;
  desc?: string | undefined;
  episodes: number | undefined;
  genre: string[] | undefined;
  status: string | undefined;
  favorites: number | undefined;
  type: string | undefined;
  str: string | undefined;
  year: number | undefined;
}

export const SingleHeadInfo = ({
  isLight,
  porster,
  desc,
  title,
  episodes,
  genre,
  favorites,
  status,
  type,
  str,
  year,
}: IAnimeCard) => {
  return (
    <>
      <Box className="manga-single_page">
        <Box>
          <img
            className="image"
            src={`https://static-libria.weekstorm.one${porster}`}
            alt={title}
          />
        </Box>
        <Box className="manga-single_p" sx={{ margin: '30px 0' }}>
          <a
            href="#watch"
            className={isLight ? 'manga-single_a-light' : 'manga-single_a-dark'}
          >
            Смотреть сейчас{' '}
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9393 26.0607C11.5251 26.6464 12.4749 26.6464 13.0607 26.0607L22.6066 16.5147C23.1924 15.9289 23.1924 14.9792 22.6066 14.3934C22.0208 13.8076 21.0711 13.8076 20.4853 14.3934L12 22.8787L3.51472 14.3934C2.92893 13.8076 1.97918 13.8076 1.3934 14.3934C0.807611 14.9792 0.807611 15.9289 1.3934 16.5147L10.9393 26.0607ZM10.5 -6.55671e-08L10.5 25L13.5 25L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                fill={isLight ? '#232323' : '#fff'}
              />
            </svg>
          </a>
          <Box className="manga-single_page-text_content">
            <p className="name-title">{title}</p>
            <p>
              Сезон: {year} {str}
            </p>
            <p>Тип: {type}</p>
            <p>Эпизоды: {episodes}</p>
            <p>Статус: {status}</p>
            <p>
              Жанр:
              {genre?.map((g) => (
                <span key={g}> {g}, </span>
              ))}
            </p>
            <p>Понравилось: {favorites} человек</p>
          </Box>
        </Box>
      </Box>
      <h4>{desc}</h4>
      <Box
        className="manga-single_other-links"
        sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: '25px' }}
      ></Box>
    </>
  );
};
