import React from "react"
import CardList from "../CardList"

import { HotNewsDtos } from "src/api/HomeApi"

function HotNews() {
  const data = HotNewsDtos()
  console.log(data)
  return (
    <CardList
      type="news"
      data={[
        {
          title: `"삼성전자, 최악의 경우 4만 6300원 간다"… 폭탄 전망`,
          press: "한국경제",
          image:
            "https://imgnews.pstatic.net/image/003/2022/10/13/NISI20211006_0000841644_web_20211006183741_20221013064206673.jpg",
          url: "https://www.hankyung.com/finance/article/202209307381i",
        },
        {
          title: "카카오, 3만 가나… '역대급 경고'에 시장 긴장 고조",
          press: "한국일보",
          image:
            "https://imgnews.pstatic.net/image/009/2022/10/13/0005029546_001_20221013102301040.jpg",
          url: "",
        },
        {
          title: "애플, 아이폰 14 사상 최대 판매 실적… 고환율에도 굳건",
          press: "매일경제",
          image:
            "https://imgnews.pstatic.net/image/014/2022/10/12/0004911494_001_20221012134205755.jpg",
          url: "",
        },
        {
          title: `"산 것도 없는데 10만원"…고물가에 소비자·기업 모두 속앓이`,
          press: "매일경제",
          image:
            "https://file.mk.co.kr/meet/neds/2022/10/image_readtop_2022_905242_16656350655195233.jpg",
          url: "https://www.mk.co.kr/news/economy/view/2022/10/905242/",
        },
      ]}
    />
  )
}

export default HotNews
