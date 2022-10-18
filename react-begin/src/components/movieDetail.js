import PropTypes from 'prop-types';

// 코드챌린지
// 영화 디테일 페이지 제작
function MovieDetail({ coverImg, title, year, genres, runtime, rating }) {
  return (
    <div>
      {/* header */}
      <div>
        <p>{title}</p>
        <p>{year}</p>
        <div>{genres && genres.map((gen) => <p key={gen}>{gen}</p>)}</div>
      </div>
      {/* section_1*/}
      <div>
        <img src={coverImg} alt={title} />
      </div>
      <div>
        <p>🕐 {runtime ? `${runtime} Minute` : 'None'}</p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number,
  rating: PropTypes.number,
};

export default MovieDetail;
