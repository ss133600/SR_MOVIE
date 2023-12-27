import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { useScrollTop } from "../../lib/useScrollTop";

const ConBox = styled.div`
  /* max-width: 1200px; */
  width: 70%;
  height: 700px;
  padding: 50px 50px;
  display: flex;
  margin-top: 10%;
  margin-bottom: 10%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  border-radius: 15px;
  @media screen and(max-width:1200px ) {
    display: none;
    flex-direction: column;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat
    center/cover;
  /* filter: blur(5px); */
  @media screen and(max-width:450px ) {
    padding: 0px 0px;
    /* flex-direction: column; */
    /* padding: 100px 5%; */
  }
`;
const Bg = styled.div`
  /* max-width: 35%; */
  width: 400px;
  height: 600px;
  border-radius: 15px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat
    center/cover;
  @media screen and(max-width:1200px ) {
    width: 70px;
  }
`;
const Con = styled.div`
  width: 40%;
  font-size: 20px;
  /* padding-top: 50px; */
  margin-left: 7%;
  @media screen and(max-width:450px ) {
    width: 100%;
  }
  @media screen and(max-width:1200px ) {
    /* width: 500px; */
    background-color: white;
    flex-direction: column;
    display: none;
  }
`;
const Title = styled.h3`
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and(max-width:450px ) {
    font-size: 30px;
  }
`;
const Rated = styled.div`
  font-weight: 400;
`;
const Genres = styled.ul`
  margin: 20px 0;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`;
const Release = styled.div`
  margin-bottom: 20px;
`;
const Runtime = styled.div``;
const Desc = styled.p`
  max-width: 370px;
  width: 100%;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 30px;
  opacity: 0.7;
  line-height: 1.8em;
  font-weight: 300;
  @media screen and(max-width:450px ) {
    max-width: 100%;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDatailData] = useState();
  const [loading, setLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDatailData(data);
        setLoading(false);
      } catch (error) {
        // console.log("Error: " + error);
      }
    })();
  }, []);

  // console.log(detailData);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container $bgUrl={detailData.backdrop_path}>
          <ConBox>
            <Bg $bgUrl={detailData.poster_path} />
            <Con>
              <Title>{detailData.title}</Title>
              <Rated>평점 : {Math.round(detailData.vote_average)}점</Rated>
              <Genres>
                {detailData.genres.map((genres) => (
                  <li key={genres.id}>{genres.name}</li>
                ))}
              </Genres>
              <Release>{detailData.release_date}</Release>
              <Runtime>{detailData.runtime}분</Runtime>
              <Desc>{detailData.overview.slice(0, 120) + "..."}</Desc>
            </Con>
          </ConBox>
        </Container>
      )}
    </div>
  );
};
