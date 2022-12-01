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
  const { data, error } = HotNewsDtos();

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
        {error?.status ? (
          <article className="list-error-msg">목록을 가져올 수 없습니다<br /><br />Error Status: {error?.status}</article>
        ) : (
          data?.map((value: IHotNewsDtos, idx: number) => (
            <NewsCard key={idx} value={value} />
          ))
        )}
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

const List = styled.section`
.list-error-msg {
  margin: 24px 0;
  font-size: 1.1rem;
  text-align: center;
}`;

export default Hot;
