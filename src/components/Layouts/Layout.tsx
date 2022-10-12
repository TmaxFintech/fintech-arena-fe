import React from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import Header from "./partials/Header"

export const Layout = ({ children }: any) => {
  const router = useRouter()
  return (
    <Main>
      {router.query.id ? null : <Header />}
      {children}
    </Main>
  )
}

const Main = styled.main`
  position: absolute;
  padding: 0 16px;
  left: 50%;
  max-width: 420px;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  transform: translateX(-50%);
  overflow: hidden;
`
