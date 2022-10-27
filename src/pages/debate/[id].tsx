import React from "react"
import styled from "@emotion/styled"
import BullBearChart from "src/components/Debate/BullBearChart"
import BullBearChart2 from "src/components/Debate/BullBearChart"

function DebateDetail() {
  return (
    <Wrap>
      <BullBearChart
        bull={{ name: "10만전자 간다", vote: 156472 }}
        bear={{ name: "4만전자 간다", vote: 162321 }}
      />
    </Wrap>
  )
}
const Wrap = styled.div`
  display: flex;
  margin: 25px 0;
  flex-direction: column;
  gap: 25px;
`

export default DebateDetail
