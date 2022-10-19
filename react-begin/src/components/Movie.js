import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style.css';

function Movie({ id, coverImg, title, year, rating, genres, runtime }) {
  return (
    <div className="header">
      <img src={coverImg} alt={title} />
      <div className="title-warp">
        <div className="title">
          <Link to={`/movie/${id}`}>
            {title} ({year})
          </Link>
        </div>
        <div className="exp">
          ⭐ {rating} | 🕐 {runtime} Minutes
        </div>
        <ul>
          {genres &&
            genres.map((gen) => (
              <li key={gen} className="gen">
                {gen}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
};

export default Movie;
