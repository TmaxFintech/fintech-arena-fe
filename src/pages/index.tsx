import type { NextPage } from "next"
import styled from "@emotion/styled"

import Card from "src/components/Home/Card"
import MySocialList from "src/components/Home/MySocialList"

const Home: NextPage = () => {
  return (
    <>
      <SubTitle>HOT토픽 아레나</SubTitle>
      <Card />
      <SubTitle>HOT 뉴스</SubTitle>
      <Card />
      <SubTitle>HOT 게시글</SubTitle>
      <Card />
      <MySocialList />
    </>
  )
}

const SubTitle = styled.h2`
  margin: 28px 0 12px;
  font-size: 1.25rem;
  font-weight: 600;
`

export default Home
