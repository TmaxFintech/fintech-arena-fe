import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import BullBearChart from "src/components/Debate/BullBearChart";
import { HotTopicDebate } from "src/mock/DebateMockData";
import { COLOR } from "src/styles/PALLETS";
import CardList from "src/components/Home/CardList";

function DebateDetail() {
  const router = useRouter();
  const query = router.query.id;
  const mockData = HotTopicDebate.filter(
    (value) => value.id === Number(query)
  )[0];

  return (
    <Wrap>
      <Top>
        <h3 className="topic-title">{mockData?.title}</h3>
        <div className="topic-asset">
          <i></i>
          {mockData?.relatedAsset}
        </div>
      </Top>
      <Vote>
        <p className="bullbear-header">
          <span>Bull</span> | <span>Bear</span>
        </p>
        <BullBearChart
          bull={{ name: mockData.bullTitle, vote: mockData.bull }}
          bear={{ name: mockData.bearTitle, vote: mockData.bear }}
        />
        <SubTitle>Bull</SubTitle>
        <CardList
          type="article"
          data={[
            {
              id: 1,
              title: `아이폰 15 유출 떴다.jpg`,
              board: "애플 팬클럽",
            },
            {
              id: 12,
              title: "재건축 승인 났다네요.jpg",
              board: "서울부동산집값지키기 카페",
            },
            {
              id: 13,
              title: "카카오 이번에 ㄹㅇ 난리 났습니다",
              board: "카카오 팬클럽",
            },
            {
              id: 14,
              title: "현재 몇 퍼센트인가요?",
              board: "빅테크 주주들의 모임 카페",
            },
          ]}
        />
      </Vote>
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Top = styled.section`
  margin: 32px 24px 0;
  color: #fff;
  .topic-title {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .topic-asset {
    display: flex;
    align-items: center;
    margin: 8px 0 0;
    gap: 8px;
    color: #000;
    font-size: 0.8rem;
    i {
      display: block;
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 100%;
    }
  }
`;
const Vote = styled.section`
  margin: 0 -16px;
  padding: 36px 4px 0;
  min-height: 90vh;
  background-color: #fff;
  border-radius: 24px 24px 0px 0px;
  .bullbear-header {
    margin: 0 0 16px;
    color: #9e9e9e;
    font-size: 1.38rem;
    font-weight: 700;
    text-align: center;
    span {
      margin: 0 8px;
    }
    span:first-of-type {
      color: ${COLOR.bull};
    }
    span:last-of-type {
      color: ${COLOR.bear};
    }
  }
`;
const SubTitle = styled.h2`
  font-size: 1.37rem;
  font-weight: 600;
`;

export default DebateDetail;
