import React from "react"
import styled from "@emotion/styled"

import { SHADOW } from "src/styles/PALLETS"

function Card({ children }: { children: JSX.Element }) {
  return <Article>{children}</Article>
}

const Article = styled.article`
  flex: 1;
  margin: 0 4px;
  padding: 20px;
  min-height: 80px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: ${SHADOW.basic};
  user-select: none;
`

export default Card
