import React from "react";
import styled from "@emotion/styled";

import HotArena from "src/components/Home/Cards/HotArena";
import NowHotGridList from "src/components/Debate/NowHotGridList";
import RecentTopic from "src/components/Debate/RecentTopic";

function DebateIndex() {
  return (
    <>
      <SubTitle>Hi-Me Pick! 아레나</SubTitle>
      <HotArena />
      <SubTitle>지금 HOT한! 아레나</SubTitle>
      <NowHotGridList />
      <SubTitle>최근 참여한 아레나</SubTitle>
      <RecentTopic />
    </>
  );
}

const SubTitle = styled.h2`
  margin: 34px 0 8px;
  font-size: 1.37rem;
  font-weight: 600;
`;

export default DebateIndex;
