import React from "react";
import styled from "@emotion/styled";

import CardList from "../Home/CardList";
import { HotTopicDebate } from "src/mock/DebateMockData";

function RecentTopic() {
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
      <CardList
        type="article"
        data={HotTopicDebate.map((value, idx) => ({
          id: value.id,
          title: value.title,
          subTitle: calculateDday(value.finishDate),
        }))}
      />
    </Container>
  );
}

const Container = styled.section`
  margin: 0 -16px;
`;
export default RecentTopic;
