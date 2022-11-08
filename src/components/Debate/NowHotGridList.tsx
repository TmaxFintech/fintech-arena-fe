import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { SHADOW } from "src/styles/PALLETS";
import { HotTopicDebate } from "src/mock/DebateMockData";

function NowHotGridList() {
  const calculateDday = (target: string) => {
    let targetDate = new Date(`${target}T00:00:00+0900`);
    let nowDate = new Date();
    let diff = +targetDate - +nowDate;

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    return `D-${Math.ceil((diffDay * 24 + diffHour + diffMin / 60) / 24)}`;
  };

  return (
    <Container>
      {HotTopicDebate.map((value, idx) => (
        <Link key={idx} href={`/debate/${value.id}`}>
          <Card>
            <p className="debate-finish-count">
              {calculateDday(value.finishDate)}
            </p>
            <Image src="/icon/home_icon_up.png" alt={value.title} />
            <h5>{value.title}</h5>
          </Card>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
  margin: 0 -16px;
  padding: 8px 4px 20px;
  overflow: hidden;
`;

const Card = styled.div`
  cursor: pointer;
  padding: 20px;
  min-height: 80px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: ${SHADOW.basic};
  user-select: none;
  h5 {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    white-space: pre-wrap;
    line-height: 1.2rem;
  }
  .debate-finish-count {
    float: right;
    margin: 0 0 16px;
    font-size: 0.95rem;
    line-height: 40px;
  }
  &:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-row: 1 / 3;
    .debate-finish-count {
      float: none;
      text-align: center;
      line-height: 1rem;
    }
    img {
      margin: 0 0 45px;
      width: 120px;
    }
  }
`;
const Image = styled.img`
  margin: 0 auto 17px;
  width: 40px;
`;

export default NowHotGridList;
