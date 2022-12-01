import React from "react";
import styled from "@emotion/styled";

import CardList from "../CardList";
import { HotNewsDtos } from "src/api/HomeApi";

function HotNews() {
  const { data, error } = HotNewsDtos();

  return (
    <Container>
      <CardList type="news" data={error?.status ? [] : data} />
    </Container>
  );
}

const Container = styled.section`
  margin: 0 -16px;
`;

export default HotNews;
