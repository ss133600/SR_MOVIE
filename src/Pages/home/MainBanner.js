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
    font-size: 85px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
    max-width: 700px;
    width: 100%;
    font-size: 19px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
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
    180deg,
    rgba(255, 255, 255, 0.39280125195618154) 0%,
    rgba(130, 130, 130, 0.29744397759103647) 25%,
    rgba(54, 54, 54, 0.6924019607843137) 45%,
    rgba(0, 0, 0, 0.7876400560224089) 65%
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
