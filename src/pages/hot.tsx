import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import { HotNewsDtos } from "src/api/HomeApi";
import { IHotNewsDtos } from "src/types/HotDataType";
import NewsCard from "src/components/Hot/NewsCard";

function Hot() {
  const router = useRouter();
  const query = router.query;
  const data: IHotNewsDtos[] = HotNewsDtos();

  return (
    <>
      <Toggle>
        <Link href="/hot?show=news">
          <Button query={query.show === "news"}>HOT 뉴스</Button>
        </Link>
        <Link href="/hot?show=article">
          <Button query={query.show === "article"}>HOT 게시글</Button>
        </Link>
      </Toggle>
      <List>
        {data?.map((value, idx) => (
          <NewsCard key={idx} value={value} />
        ))}
      </List>
    </>
  );
}

const Toggle = styled.div`
  display: flex;
  margin: 12px 0 4px;
  justify-content: space-between;
`;

const Button = styled.button<{ query: boolean }>`
  cursor: pointer;
  padding: 8px;
  flex: 1;
  font-size: 1rem;
  font-weight: ${(props) => (props.query ? "600" : "500")};
  border-bottom: ${(props) => (props.query ? "3px" : "1px")} solid #000;
  opacity: ${(props) => (props.query ? "1" : "0.5")};
`;

const List = styled.section``;

export default Hot;
