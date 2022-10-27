import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"

function Header() {
  return (
    <Container>
      <Link href="/">
        <Location>arena</Location>
      </Link>
      <p>menu</p>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  margin: 32px 0 0;
  justify-content: space-between;
  align-items: center;
`
const Location = styled.div`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(to right, #ffcc32, #ff8503);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default Header
