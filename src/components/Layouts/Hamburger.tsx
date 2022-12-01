import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { COLOR } from "src/styles/PALLETS";

function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setShowMenu(false);
  }, [router]);

  return (
    <>
      <Button
        className={showMenu ? "active-menu-button" : ""}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </Button>
      <Container className={showMenu ? "active-menu" : ""}>
        <Menu>
          <li>핫토픽아레나토론</li>
          <li>HOT</li>
          <li>
            <Link href="/user/login">로그인/회원가입</Link>
          </li>
        </Menu>
      </Container>
    </>
  );
}

const Button = styled.button`
  cursor: pointer;
  width: 44px;
  height: 44px;
  z-index: 6;
  span {
    display: block;
    margin: 4px auto;
    width: 24px;
    height: 3px;
    background-color: #000;
    transition: all 0.3s;
  }
  &.active-menu-button {
    position: absolute;
    top: 32px;
    right: 20px;
    span {
      width: 28px;
    }
    span:nth-of-type(1) {
      transform: rotate(-45deg) translateY(10px);
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(3) {
      transform: rotate(45deg) translateY(-10px);
    }
  }
`;
const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: all 0.3s;
  z-index: 5;
  overflow: hidden;
  transform: translateX(420px);
  &.active-menu {
    background-color: ${COLOR.background};
    opacity: 1;
    transform: translateX(0);
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 84px 0 0;
  padding: 12px 24px;
  font-size: 1.3rem;
  font-weight: 500;
  gap: 24px;
  li {
    display: inline-block;
    padding: 8px 0;
    &:hover {
      color: #000;
      font-weight: 700;
    }
  }
  &:hover {
    color: #535353;
  }
`;

export default Hamburger;
