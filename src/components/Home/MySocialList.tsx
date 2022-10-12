import React, { useState } from "react"
import styled from "@emotion/styled"

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
  position: absolute;
  margin: 0 -16px;
  padding: 12px 24px;
  width: 100%;
  bottom: 0;
  min-height: ${(props) => (props.showList ? "90vh" : "120px")};
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
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
    background-color: #fff7bb;
    color: #ffb029;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 12px;
  }
`

export default MySocialList
