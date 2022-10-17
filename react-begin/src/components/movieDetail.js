import PropTypes from 'prop-types';

function movieDetail({
  id,
  coverImg,
  title,
  year,
  genres,
  runtime,
  rating,
  like,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <span>
        {year} | {runtime}
      </span>
      <div>
        <>{rating}</>
        <>{like}</>
      </div>
    </div>
  );
}

movieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default movieDetail;
