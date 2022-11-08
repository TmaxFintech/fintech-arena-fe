import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import DebateCard from "../DebateCard";
import { HotTopicDebate } from "src/mock/DebateMockData";

function Arena() {
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
        <DebateCard key={idx} active={value.active}>
          <Link href={`/debate/${value.id}`}>
            <div>
              <Image src="/icon/home_icon_up.png" alt={value.title} />
              <h5>{value.title}</h5>
              <p className="debate-finish-count">
                {calculateDday(value.finishDate)}
              </p>
            </div>
          </Link>
        </DebateCard>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 -16px;
  padding: 8px 4px 20px;
  overflow: auto;
  white-space: nowrap;
  div {
    h5 {
      margin: 0 0 8px;
      font-size: 1.15rem;
      font-weight: 700;
      white-space: pre-wrap;
      line-height: 1.5rem;
    }
    .debate-finish-count {
      margin: 12px 0 4px;
      font-size: 0.95rem;
      opacity: 0.8;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.img`
  margin: 0 auto 4px;
  width: 60px;
`;

export default Arena;
