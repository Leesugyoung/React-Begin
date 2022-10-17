import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/movieDetail';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  // → url 에 있는 변수의 값을 가져온다. /:{변수}
  // 이름은 변수에 지정한 값으로 설정됨
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // 코드챌린지
  // home 에서 해줬던 loading 추가
  // movie 를 state 에 추가(api에서 json을 받아와서 아무것도 안하고있는 상태)
  return (
    <div>
      <h1>Deatail</h1>
      {loading ? (
        <h1>Loaidng...</h1>
      ) : (
        <div>
          <h1>{detail.data.movie}</h1>
        </div>
      )}
    </div>
  );
}

export default Detail;
