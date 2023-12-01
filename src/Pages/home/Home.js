import { nowPlaying, popular, comming, topRated } from "../../api";
import { useEffect, useState } from "react";
import { MainBanner } from "./MainBanner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [commingData, setCommingData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);

        const { results: popResults } = await popular();
        setPopData(popResults);

        const { results: commingResults } = await comming();
        setCommingData(commingResults);

        const { results: topRatedResults } = await topRated();
        setTopRatedData(topRatedResults);

        setLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  // console.log(popData);

  // console.log(results);
  // console.log(loading);
  // console.log(nowPlayingData);
  console.log(commingData);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <MainBanner data={nowPlayingData[0]} />
              <ShowMovie titleName={"인기있는"} movieData={popData} />
              <ShowMovie titleName={"상영중"} movieData={nowPlayingData} />
              <ShowMovie titleName={"개봉 예정"} movieData={commingData} />
              <ShowMovie titleName={"평점높은"} movieData={topRatedData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
