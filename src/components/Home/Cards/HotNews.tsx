import React from "react"
import CardList from "../CardList"

import { HotNewsDtos } from "src/api/HomeApi"
import { IHotDtos } from "src/types/HotDataType"

function HotNews() {
  const data = HotNewsDtos()
  return <CardList type="news" data={data} />
}

export default HotNews
