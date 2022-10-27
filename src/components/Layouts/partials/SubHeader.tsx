import React from "react"
import styled from "@emotion/styled"
import { useRouter } from "next/router"

function SubHeader({ text }: { text: string }) {
  const router = useRouter()
  return (
    <Container>
      <Back>
        <button id="back" onClick={() => router.back()}>
          <span className="a11y-hidden">뒤로가기</span>
        </button>
      </Back>
      <HeadTitle>{text}</HeadTitle>
      <Buttons>
        <button id="search">
          <span className="a11y-hidden">검색</span>
        </button>
        <button id="menu">
          <span className="a11y-hidden">menu</span>
        </button>
      </Buttons>
    </Container>
  )
}

const Container = styled.header`
  cursor: pointer;
  display: flex;
  margin: 32px 0 0;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
    width: 44px;
    height: 44px;
  }
`
const Back = styled.div`
  flex: 1;
  #back {
    background-image: url("/icon/arrow_back.svg");
  }
`
const HeadTitle = styled.div`
  flex: 2;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`
const Buttons = styled.div`
  flex: 1;
  text-align: right;
  #search {
    background-image: url("/icon/search.svg");
  }
`

export default SubHeader
