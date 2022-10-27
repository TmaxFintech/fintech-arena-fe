import type { NextPage } from "next"
import styled from "@emotion/styled"

import HotArena from "src/components/Home/Cards/HotArena"
import HotArticle from "src/components/Home/Cards/HotArticle"
import HotNews from "src/components/Home/Cards/HotNews"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <>
      <HomeSection>
        <SubTitle>HOT토픽 아레나</SubTitle>
        <Link href="/debate">
          <span>더보기</span>
        </Link>
      </HomeSection>
      <HotArena />
      <HomeSection>
        <SubTitle>HOT 뉴스</SubTitle>
        <Link href="/hot?show=news">
          <span>더보기</span>
        </Link>
      </HomeSection>
      <HotNews />
      <HomeSection>
        <SubTitle>HOT 게시글</SubTitle>
        <Link href="/hot?show=article">
          <span>더보기</span>
        </Link>
      </HomeSection>
      <HotArticle />
    </>
  )
}

const HomeSection = styled.div`
  display: flex;
  margin: 28px 0 16px;
  justify-content: space-between;
  span {
    cursor: pointer;
    font-size: 0.9rem;
    opacity: 0.6;
  }
`
const SubTitle = styled.h2`
  font-size: 1.37rem;
  font-weight: 600;
`

export default Home
