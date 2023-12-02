import styled from "styled-components";

const Container = styled.footer`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
`;

export const Footer = () => {
  return <Container>&copy; 2023 SRMOVIE</Container>;
};
