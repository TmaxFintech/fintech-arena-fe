import React from "react";
import styled from "@emotion/styled";

import HotArena from "src/components/Home/Cards/HotArena";
import NowHotGridList from "src/components/Debate/NowHotGridList";
import RecentTopic from "src/components/Debate/RecentTopic";

function DebateIndex() {
  return (
    <>
      <HomeSection>
        <SubTitle>Hi-Me Pick! 아레나</SubTitle>
      </HomeSection>
      <HotArena />
      <SubTitle>지금 HOT한! 아레나</SubTitle>
      <NowHotGridList />
      <SubTitle>최근 참여한 아레나</SubTitle>
      <RecentTopic />
    </>
  );
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
`;

const SubTitle = styled.h2`
  margin: 34px 0 0;
  font-size: 1.37rem;
  font-weight: 600;
`;

export default DebateIndex;
