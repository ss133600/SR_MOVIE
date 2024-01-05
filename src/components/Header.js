import { Link, Routes } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleUser,
  faCompactDisc,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Line = styled.div`
  display: flex;
  @media screen and (max-width: 650px) {
    font-size: 30px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
const LogoBtn = styled.div`
  margin: -2px 2px;
  font-size: 36px;
  color: #ff0044;
  @media screen and (max-width: 650px) {
    font-size: 33px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Logo = styled.div`
  font-size: 35px;
  font-weight: 700;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 35px;
  }
  @media screen and (max-width: 650px) {
    li {
      margin-left: 30px;
    }
  }
`;

const UserBtn = styled.div`
  font-size: 35px;
  font-weight: 900;
  @media screen and (max-width: 650px) {
    font-size: 30px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
const SearchBtn = styled.div`
  font-size: 28px;
  font-weight: 900;
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
export const Header = () => {
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    // console.log(headerRef);
    if (pageY > 300) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)";
      headerRef.current.style.backgroundFilter = "blur(3px)";
    } else {
      headerRef.current.style.position = "absolute";
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.backgroundFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <div>
      <SHeader ref={headerRef}>
        <Logo>
          <Link to={routes.home}>
            <Line>
              SRM
              <LogoBtn>
                <FontAwesomeIcon icon={faCompactDisc} />
              </LogoBtn>
              VIE
            </Line>
          </Link>
        </Logo>
        <Menu>
          <li>
            <Link to={routes.search}>
              <SearchBtn>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </SearchBtn>
            </Link>
          </li>
          <li>
            <Link to={routes.login}>
              <UserBtn>
                <FontAwesomeIcon icon={faCircleUser} />
              </UserBtn>
            </Link>
          </li>
        </Menu>
      </SHeader>
    </div>
  );
};
