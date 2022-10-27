import React from "react"
import styled from "@emotion/styled"

import { COLOR } from "src/styles/PALLETS"

function BullBearChart({ bull, bear }: any) {
  const allVote = bull?.vote + bear?.vote
  return (
    <Container>
      <VS position={(bull.vote / allVote) * 100}>VS</VS>
      <Chart type={true} vote={(bull.vote / allVote) * 100}>
        <p>{bull.name}</p>
        <span>{((bull.vote / allVote) * 100).toFixed(1)}%</span>
      </Chart>
      <Triangle type={true} />
      <Triangle type={false} />
      <Chart type={false} vote={(bear.vote / allVote) * 100}>
        <p>{bear.name}</p>
        <span>{((bear.vote / allVote) * 100).toFixed(1)}%</span>
      </Chart>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`
const VS = styled.div<{ position: number }>`
  position: absolute;
  padding: 8px 10px;
  top: 50%;
  left: ${(p) => p.position}%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  color: #777;
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
`
const Chart = styled.div<{ type: boolean; vote: number }>`
  padding: 20px 16px;
  width: ${(p) => p.vote}%;
  background-color: ${(p) => (p.type ? COLOR.bull : COLOR.bear)};

  ${(p) =>
    p.type
      ? `
    border-top-left-radius:24px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 30px;
    `
      : ""};
  ${(p) =>
    p.type
      ? ""
      : `
      border-top-left-radius: 30px;
      border-top-right-radius: 24px;
    border-bottom-right-radius:24px;`};

  text-align: ${(p) => (p.type ? "left" : "right")};
  p {
    margin: 0 0 4px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
  }
  span {
    color: #fff;
    font-weight: 500;
    opacity: 0.7;
  }
`
const Triangle = styled.div<{ type: boolean }>`
  margin: 0 -10px;
  ${(p) =>
    p.type
      ? `border-top: 70px solid ${COLOR.bull}`
      : `border-bottom: 70px solid ${COLOR.bear};`};

  ${(p) =>
    p.type
      ? `border-right: 30px solid transparent;`
      : `border-left: 30px solid transparent;`};
`
export default BullBearChart
