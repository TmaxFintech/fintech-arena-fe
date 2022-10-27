import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"

import { COLOR } from "src/styles/PALLETS"
import { IHotDtos } from "src/types/HotDataType"
import Card from "./Card"

function CardList({
  type,
  data,
}: {
  type: "news" | "article"
  data: IHotDtos[]
}) {
  const [nowSlidePage, setNowSlidePage] = useState(0)
  const [startX, setStartX] = useState(0)
  const [finishX, setFinishX] = useState(0)

  const mouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setStartX(e.clientX)
  }
  const touchStart = (e: React.TouchEvent<HTMLElement>) => {
    setStartX(e.changedTouches[0].clientX)
  }
  const mouseUp = (e: React.MouseEvent<HTMLElement>) => {
    setFinishX(e.clientX)
  }
  const touchEnd = (e: React.TouchEvent<HTMLElement>) => {
    setFinishX(e.changedTouches[0].clientX)
  }
  useEffect(() => {
    if (startX - finishX > 20) {
      setNowSlidePage(nowSlidePage + 1 == data.length ? 0 : nowSlidePage + 1)
    } else if (finishX - startX > 20) {
      setNowSlidePage(nowSlidePage - 1 < 0 ? data.length - 1 : nowSlidePage - 1)
    }
  }, [finishX])

  return (
    <Container>
      <Cards
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        nowPage={nowSlidePage}
        allPage={data?.length}
      >
        {data?.map((value, idx) => (
          <Card key={idx} type={type} data={value} />
        ))}
      </Cards>
      <Sliders>
        {data?.map((value, idx) => (
          <Slider
            key={idx}
            isHere={idx == nowSlidePage}
            onClick={() => setNowSlidePage(idx)}
          ></Slider>
        ))}
      </Sliders>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 -16px;
`
const Cards = styled.div<{ nowPage: number; allPage: number }>`
  display: flex;
  width: ${(props) => props.allPage * 100}%;
  transform: translateX(
    calc(${(props) => -props.nowPage / props.allPage} * 100%)
  );
  transition: all 0.3s;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    img {
      float: left;
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 16px;
    }
    article {
      p {
        margin: 0 0 8px;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.2rem;
        word-break: keep-all;
      }
      span {
        color: #969696;
        font-size: 0.9rem;
      }
    }
  }
`
const Sliders = styled.div`
  margin: 8px 0 0;
  text-align: center;
`
const Slider = styled.i<{ isHere: boolean }>`
  cursor: pointer;
  display: inline-block;
  margin: 0 6px 0 0;
  width: ${(props) => (props.isHere ? "14px" : "6px")};
  height: 6px;
  background-color: ${(props) => (props.isHere ? COLOR.main : "#969696")};
  border-radius: 20px;
  transition: all 0.3s;
`

export default CardList
