import styled from "styled-components";
import { IMG_URL } from "../../constants";

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
  background: rgb(24, 32, 27);
  background: linear-gradient(
    0deg,
    rgba(24, 32, 27, 1) 0%,
    rgba(9, 27, 51, 0.44254198261335786) 57%,
    rgba(236, 231, 255, 1) 100%
  );

  position: absolute;
  top: 0;
  left: 0;
`;

export const MainBanner = ({ data }) => {
  return (
    <div>
      <SMainBanner $bgUrl={data.backdrop_path}>
        <BlackBg />
        <h3>{data.title}</h3>
        <p>{data.overview}</p>
      </SMainBanner>
    </div>
  );
};
