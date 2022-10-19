import PropTypes from 'prop-types';
import '../detailStyle.css';

// 코드챌린지
// 영화 디테일 페이지 제작
function MovieDetail({
  coverImg,
  title,
  year,
  genres,
  runtime,
  rating,
  desc,
  backImg,
}) {
  return (
    <div className="deatil_container">
      {/* header */}
      <div className="detail_back">
        <img className="backImg" src={backImg} />
        {/* section_*/}
        <div className="detail_cover">
          <img src={coverImg} alt={coverImg} />
          <div>
            <div className="detail_title">
              {title} ({year})
            </div>
            <div>
              {genres &&
                genres.map((gen) => (
                  <p className="detail_gen" key={gen}>
                    {gen}
                  </p>
                ))}
            </div>
            <p className="detail_run">
              🕐 {runtime ? `${runtime} Minute` : 'None'} | ⭐ {rating}
            </p>
            <div className="detail_desc">{desc}</div>
          </div>
        </div>
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
