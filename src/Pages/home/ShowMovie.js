import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 60px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
const CoverBg = styled.div`
  height: 480px;
  background: url(${IMG_URL}/w500/${(prop) => prop.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  margin-bottom: 25px;
  @media screen and (max-width: 1250px) {
    height: 380px;
  }
  @media screen and (max-width: 850px) {
    height: 300px;
  }
  @media screen and (max-width: 650px) {
    height: 300px;
  }
  @media screen and (max-width: 450px) {
    height: 220px;
    margin-bottom: 15px;
  }
`;
const MovieTitle = styled.h4`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: #fafafa;
  line-height: 25px;
  @media screen and (max-width: 650px) {
    line-height: 25px;
    font-size: 18px;
  }
  @media screen and (max-width: 450px) {
    line-height: 20px;
    font-size: 14px;
  }
`;
const Container = styled.section`
  padding-bottom: 150px;
  a {
    color: white;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 60px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
  breakpoints: {
    1524: {
      spaceBetween: 20,
      slidesPerView: 4.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    330: {
      spaceBetween: 15,
      slidesPerView: 2.5,
    },
  },
};

export const ShowMovie = ({ titleName, movieData }) => {
  return (
    <div>
      <Container>
        <Title>{titleName}</Title>

        <Swiper {...params}>
          {movieData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <CoverBg $bgUrl={data.poster_path} />
                <MovieTitle>{data.title}</MovieTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
