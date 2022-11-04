import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { COLOR } from "src/styles/PALLETS";

function Header() {
  return (
    <Container>
      <Link href="/">
        <Location>arena</Location>
      </Link>
      <p>
        <Link href="/user/login">Login</Link>
      </p>
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
  z-index: 999;
`;
const Location = styled.div`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(to right, #ffcc32, #ff8503);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Header;
