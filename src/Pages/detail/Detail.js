import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { IMG_URL } from "../../constants";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  background: url(${({ bgUrl }) => bgUrl}) no-repeat center/cover;
  padding: 50px;
  min-height: 100vh;
  position: relative; /* 배경과 내용을 겹치기 위해 position을 설정합니다. */
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7); /* 불투명한 배경을 생성합니다. */
  position: absolute; /* 상위 컨테이너에 대해 상대적으로 위치를 설정합니다. */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px;
  position: relative; /* 상위 요소에 대해 상대적으로 위치를 설정합니다. */
  z-index: 1; /* 내용을 배경 위로 올립니다. */
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 70%;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;

const Info = styled.div`
  flex: 1;
  margin-left: 70px;
  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 50px;
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 650px) {
    font-size: 50px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;

const Rating = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media screen and (max-width: 650px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Genre = styled.div`
  font-size: 23px;
  margin-bottom: 50px; /* 아래 여백을 줄입니다. */
  color: #fff;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.2); /* 연하게 밑줄을 추가합니다. */
  padding-bottom: 50px; /* 밑줄과 아래쪽 여백을 추가합니다. */
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media screen and (max-width: 650px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
    margin-bottom: 10px;
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
        console.error("Error fetching movie details: ", error);
      }
    })();
  }, [id]);

  // detailData가 정의되지 않은 경우를 처리합니다.
  if (!detailData) {
    return <Loading />;
  }

  return (
    <Container bgUrl={`${IMG_URL}/w1280/${detailData.backdrop_path}`}>
      <Overlay /> {/* 불투명한 배경을 추가합니다. */}
      <Content>
        <ImageWrapper>
          <Image
            src={`${IMG_URL}/w1280/${detailData.poster_path}`}
            alt={detailData.title}
          />
        </ImageWrapper>
        <Info>
          <Title>{detailData.title}</Title>
          <Rating>✨ 평점: {detailData.vote_average}</Rating>
          <Genre>
            📽️ 장르: {detailData.genres.map((genre) => genre.name).join(", ")}
          </Genre>
          <Description>ㆍ{detailData.overview}</Description>
        </Info>
      </Content>
    </Container>
  );
};
