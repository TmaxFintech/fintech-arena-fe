import React from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import Header from "./partials/Header"
import SubHeader from "./partials/SubHeader"
import MySocialList from "../Home/MySocialList"

export const Layout = ({ children }: any) => {
  const router = useRouter()
  const asPath = router.asPath.split("/")[1]
  console.log(asPath)
  const HeaderText = (text: string): string => {
    switch (text) {
      case "debate":
        return "금융핫토픽아레나"
      case "hot":
        return "HOT"
    }
    return ""
  }

  return (
    <>
      <Main>
        {asPath === "" ? <Header /> : <SubHeader text={HeaderText(asPath)} />}
        <main>{children}</main>
      </Main>
      {asPath === "" && <MySocialList />}
    </>
  )
}

const Main = styled.main`
  position: absolute;
  padding: 0 16px 80px;
  left: 50%;
  max-width: 420px;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  transform: translateX(-50%);
  overflow-x: hidden;
`
