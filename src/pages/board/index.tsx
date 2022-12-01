import styled from "@emotion/styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TopicArticleSocket from "src/socket/TopicArticleSocket";
import { IBoardArticleDtos } from "src/types/HotDataType";
import { SocketReqResTypes } from "src/types/SocketResponse";

function Board() {
  const [response, setResponse] = useState<SocketReqResTypes>();
  useEffect(() => {
    TopicArticleSocket({
      service: "SelectListService",
      body: {},
      setResponse: setResponse,
    });
  }, []);

  return (
    <div>
      <Link href="/board/create">글 작성</Link>
      {response ? (
        response?.body?.response.map(
          (value: IBoardArticleDtos, idx: number) => (
            <Wrap key={idx}>
              <p>ID: {value.id}</p>
              <p className="article-title">{value.title}</p>
              <p>{value.content}</p>
              <span className="article-hashtag">#{value.hashtag}</span>
            </Wrap>
          )
        )
      ) : (
        <Error>서버가 연결되지 않았거나, 생성된 게시글이 없습니다.</Error>
      )}
    </div>
  );
}

const Wrap = styled.div`
  margin: 12px 0 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 24px;
  p {
    margin: 0 0 8px;
  }
  .article-title {
    font-weight: 600;
    font-size: 1.15rem;
  }
  .article-hashtag {
    padding: 2px 4px;
    background-color: #ececec;
    border-radius: 4px;
    border: 1px solid #c5c5c5;
    font-size: 0.95rem;
  }
`;

const Error = styled.div`
  margin: 24px 0;
`;

export default Board;
