import styled from "styled-components";

const SErrorMessage = styled.span`
  font-size: 14px;
  color: crimson;
  font-weight: 600;
  margin-top: 8px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
