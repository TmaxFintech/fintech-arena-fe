import React from "react"
import styled from "@emotion/styled"

function Header() {
  return (
    <Container>
      <Location>arena</Location>
      <p>menu</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 32px 0 0;
  justify-content: space-between;
  align-items: center;
`
const Location = styled.div`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(to right, #ffcc32, #ff8503);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default Header
