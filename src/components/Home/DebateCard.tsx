import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import { SHADOW } from "src/styles/PALLETS"

function DebateCard({
  children,
  active,
}: {
  children: JSX.Element
  active: boolean
}) {
  return (
    <Wrap>
      <Contents>{children}</Contents>
      {active ? <Active /> : null}
    </Wrap>
  )
}

const gradient = `
#63fbf2 15.32%,
#9655ff 35.75%,
#ffec89 61.76%,
#ff299d 86.65%`

const Rotate = keyframes`
    0% { transform :rotate(0deg) }
    100% { transform :rotate(360deg) }
`
const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-right: 8px;
  width: 212px;
  height: 212px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: ${SHADOW.basic};
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    transform: scale(1.03);
  }
`
const Active = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(140.63deg, ${gradient});
  animation: ${Rotate} 2.4s linear 0.5s infinite;
  border-radius: 100%;
`
const Contents = styled.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 20px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background-color: #fff;
  border-radius: 100%;
  text-align: center;
  word-break: keep-all;
  user-select: none;
  z-index: 1;
`

export default DebateCard
