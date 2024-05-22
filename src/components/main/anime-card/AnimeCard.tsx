import { Link } from 'react-router-dom';

interface IAnimeCard {
  id: number | undefined;
  porster: string | undefined;
  title?: string | undefined;
  desc?: string | undefined;
  code?: string | undefined;
}

export const AnimeCard = ({ id, porster, title, code }: IAnimeCard) => {
  return (
    <Link to={`/main/${code}`} key={id}>
      <div className="card">
        <img
          src={`https://static-libria.weekstorm.one${porster}`}
          alt="image"
        />
        <p>{title}</p>
        <button>Перейти к просмотру</button>
      </div>
    </Link>
  );
};
