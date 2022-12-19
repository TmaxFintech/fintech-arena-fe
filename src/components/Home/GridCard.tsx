import React, { useState } from "react";
import styled from "@emotion/styled";

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import { COLOR } from "src/styles/PALLETS";
import "@egjs/flicking-plugins/dist/pagination.css";

interface GridCardItemsType {
  id: number;
  name: string;
  logo: string;
}

function GridCard({ datas }: { datas: GridCardItemsType[][] }) {
  const plugin = [new Pagination({ type: "bullet" })];

  return (
    <Container>
      <Flicking moveType="snap" autoResize={true} align="prev" plugins={plugin}>
        {datas?.map((value, idx) => (
          <Card key={idx}>
            {value?.map((item, idx2) => (
              <Item key={idx2}>
                <div className="item-thumbnail"></div>
                <h3>{item.name}</h3>
              </Item>
            ))}
          </Card>
        ))}
        <ViewportSlot>
          <div className="flicking-pagination"></div>
        </ViewportSlot>
      </Flicking>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin: 16px 0 40px;
  height: 132px;
  overflow: hidden;
  .flicking-camera {
    position: relative;
    display: flex;
    flex-direction: row;
    will-change: transform;
  }
  .flicking-pagination {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .flicking-pagination-bullet {
    background-color: #969696;
    width: 6px;
    height: 6px;
    border-radius: 20px;
    transition: all 0.3s;
  }
  .flicking-pagination-bullet-active {
    background-color: ${COLOR.main};
    width: 14px;
  }
`;

const Card = styled.div`
  display: grid;
  margin: 0 4px;
  min-width: 372px;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  .item-thumbnail {
    width: 100%;
    height: 80px;
    background-color: #d9d9d9;
    border-radius: 24px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;

export default GridCard;
