import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { COLOR } from "src/styles/PALLETS";
import Hamburger from "../Hamburger";

function Header() {
  return (
    <Container>
      <Link href="/">
        <Logo>arena</Logo>
      </Link>
      <Hamburger />
    </Container>
  );
}

const Container = styled.header`
  position: sticky;
  display: flex;
  padding: 32px 16px 14px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLOR.background};
  z-index: 10;
`;
const Logo = styled.h1`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(to right, #ffcc32, #ff8503);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Header;
