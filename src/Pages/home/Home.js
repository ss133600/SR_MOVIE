// import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { MainBanner } from "./MainBanner";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  // console.log(results);
  console.log(loading);
  console.log(nowPlayingData);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>{nowPlayingData && <MainBanner data={nowPlayingData[12]} />}</div>
      )}
    </>
  );
};
