import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <div>
      <Container>
        <ScaleLoader color="#FF0060" />
      </Container>
    </div>
  );
};
