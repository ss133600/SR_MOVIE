import styled from "styled-components";

const Container = styled.div`
  padding: 150px 5%;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
