import React from "react";
import styled from "@emotion/styled";

import CardList from "../CardList";
import { HotNewsDtos } from "src/api/HomeApi";

function HotNews() {
  const data = HotNewsDtos();
  return (
    <Container>
      <CardList type="news" data={data} />
    </Container>
  );
}

const Container = styled.section`
  margin: 0 -16px;
`;

export default HotNews;
