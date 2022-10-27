import React from "react"
import CardList from "../CardList"

function HotArticle() {
  return (
    <CardList
      type="article"
      data={[
        {
          title: `아이폰 15 유출 떴다.jpg`,
          board: "애플 팬클럽",
          url: "",
        },
        {
          title: "재건축 승인 났다네요.jpg",
          board: "서울부동산집값지키기 카페",
          url: "",
        },
        {
          title: "카카오 이번에 ㄹㅇ 난리 났습니다",
          board: "카카오 팬클럽",
          url: "",
        },
        {
          title: "현재 몇 퍼센트인가요?",
          board: "빅테크 주주들의 모임 카페",
          url: "",
        },
      ]}
    />
  )
}

export default HotArticle
