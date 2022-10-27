import React, { useState } from "react"
import styled from "@emotion/styled"

import { COLOR, SHADOW } from "src/styles/PALLETS"

function MySocialList() {
  const [showList, setShowList] = useState(false)
  return (
    <Container showList={showList}>
      <Header onClick={() => setShowList(!showList)}>
        <p>MY 카페&팬클럽</p>
        <span>새 소식 10건 +</span>
      </Header>
      {showList ? <>내용</> : null}
    </Container>
  )
}

const Container = styled.section<{ showList: boolean }>`
  position: fixed;
  padding: 20px 24px;
  max-width: 420px;
  width: 100%;
  left: 50%;
  bottom: 0;
  min-height: ${(props) => (props.showList ? "90%" : "80px")};
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: ${SHADOW.center};
  transform: translateX(-50%);
  transition: all 0.3s;
  z-index: 10;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 1.25rem;
    font-weight: 600;
  }
  span {
    padding: 8px;
    background-color: rgba(${COLOR.mainrgb}, 0.25);
    color: ${COLOR.main};
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 8px;
  }
`

export default MySocialList
