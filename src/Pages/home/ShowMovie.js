import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
const CoverBg = styled.div`
  height: 400px;
  background: url(${IMG_URL}/w500/${(prop) => prop.$bgUrl}) no-repeat center /
    cover;

  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;
const MovieTitle = styled.h4`
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 450px) {
    /* font-size: 16px; */
    line-height: 25px;
  }
`;
const Layout = styled.section`
  padding: 100px 5%;
  a {
    color: white;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
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
      <Layout>
        <Title>{titleName}</Title>

        <Swiper {...params}>
          {movieData.map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail${data.id}`}>
                <CoverBg $bgUrl={data.poster_path} />
                <MovieTitle>{data.title}</MovieTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Layout>
    </div>
  );
};
