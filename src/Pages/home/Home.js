// import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { MainBanner } from "./MainBanner";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../../constants";
const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const CoverBg = styled.div`
  height: 250px;
  background: url(${IMG_URL}/w500/${(prop) => prop.$bgUrl}) no-repeat center /
    cover;
`;
const MovieTitle = styled.div``;
const Layout = styled.section`
  padding: 100px 5%;
`;

// const params = {
//   breakpoints: {

//   }
// }

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
        <div>
          {nowPlayingData && (
            <>
              <MainBanner data={nowPlayingData[0]} />
              <Layout>
                <Title>제목</Title>

                <Swiper slidesPerView={6.5} spaceBetween={20}>
                  {nowPlayingData.map((data) => (
                    <SwiperSlide key={data.id}>
                      <CoverBg $bgUrl={data.poster_path} />
                      <MovieTitle>{data.title}</MovieTitle>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Layout>
            </>
          )}
        </div>
      )}
      ;
    </>
  );
};
