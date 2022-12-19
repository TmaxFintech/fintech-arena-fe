import React, { useState } from "react";
import styled from "@emotion/styled";

import { COLOR, SHADOW } from "src/styles/PALLETS";
import GridCard from "./GridCard";

function MyCafeClubList() {
  const [showList, setShowList] = useState(false);
  const [mock_data, setMock_data] = useState([
    [
      { id: 1, name: "카페1", logo: "" },
      { id: 2, name: "카페2", logo: "" },
      { id: 3, name: "카페3", logo: "" },
      { id: 4, name: "카페4", logo: "" },
    ],
    [
      { id: 5, name: "카페5", logo: "" },
      { id: 6, name: "카페6", logo: "" },
      { id: 7, name: "카페7", logo: "" },
      { id: 8, name: "카페8", logo: "" },
    ],
    [
      { id: 9, name: "카페19", logo: "" },
      { id: 10, name: "카페10", logo: "" },
      { id: 11, name: "카페11", logo: "" },
      { id: 12, name: "카페12", logo: "" },
    ],
  ]);

  return (
    <>
      <Container showList={showList}>
        <Header className="list-header" onClick={() => setShowList(!showList)}>
          <Title>MY 카페&팬클럽</Title>
          <span>새 소식 10건 +</span>
        </Header>
        <Contents showList={showList}>
          <Title>MY 카페</Title>
          <GridCard datas={mock_data} />
          <Title>MY 팬클럽</Title>
          <GridCard datas={mock_data} />
          <Title>새소식</Title>
        </Contents>
      </Container>
      {showList && <Backdrop onClick={() => setShowList(false)} />}
    </>
  );
}

const Container = styled.section<{ showList: boolean }>`
  position: fixed;
  padding: 20px 24px;
  max-width: 420px;
  width: 100%;
  left: 50%;
  bottom: 0;
  min-height: 90%;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: ${SHADOW.center};
  transform: ${(props) => (props.showList ? "translate(-50%, 0%)" : "translate(-50%, calc(100% - 80px))")};;
  transition: all 0.3s;
  z-index: 11;
  .list-header {
    opacity: ${(props) => (props.showList ? 0 : 1)};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  span {
    padding: 8px;
    background-color: rgba(${COLOR.mainrgb}, 0.25);
    color: ${COLOR.main};
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 8px;
  }
`;

const Contents = styled.div<{ showList: boolean }>`
  height: ${(props) => (props.showList ? "100%" : "0")};
  opacity: ${(props) => (props.showList ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 10;
`;
export default MyCafeClubList;
