import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom/dist";

const Container = styled.div`
  a {
    color: white;
  }
`;
const SMainBanner = styled.section`
  height: 100vh;
  /* background-color: aliceblue; */
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  h3,
  p {
    position: relative;
  }

  h3 {
    max-width: 700px;
    width: 100%;
    line-height: 100px;
    font-size: 85px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 850px) {
      font-size: 60px;
    }
  }
  p {
    max-width: 700px;
    width: 100%;
    font-size: 19px;
    font-weight: 300;
    line-height: 30px;
    opacity: 0.8;
    @media screen and (max-width: 850px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 45px;
      line-height: 60px;
    }
  }
`;
const BlackBg = styled.section`
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgb(255 255 255 / 0%) 0%,
    rgb(130 130 130 / 0%) 25%,
    rgb(54 54 54 / 19%) 45%,
    rgb(0 0 0 / 52%) 55%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const MainBanner = ({ data }) => {
  return (
    <div>
      <Container>
        <Link to={`/detail/${data.id}`}>
          <SMainBanner $bgUrl={data.backdrop_path}>
            <BlackBg />
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
          </SMainBanner>
        </Link>
      </Container>
    </div>
  );
};
