import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #ff597b;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const ButtonUi = ({ active, text }) => {
  return <Button $isActive={active}>{text}</Button>;
};
