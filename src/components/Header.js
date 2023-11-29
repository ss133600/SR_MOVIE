import { Link, Routes } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 60px;
  }
`;
export const Header = () => {
  return (
    <div>
      <SHeader>
        <Logo>
          <Link to={routes.home}>SRMOVIE</Link>
        </Logo>
        <Menu>
          <li>
            <Link to={routes.search}>Search</Link>
          </li>
          <li>
            <Link to={routes.user}>User</Link>
          </li>
        </Menu>
      </SHeader>
    </div>
  );
};
