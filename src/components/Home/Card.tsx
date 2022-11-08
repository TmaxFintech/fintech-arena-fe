import React, { useState } from "react";
import styled from "@emotion/styled";

import { SHADOW } from "src/styles/PALLETS";
import { IHotDtos } from "src/types/HotDataType";
import NewsModal from "./NewsModal";

function Card({ type, data }: { type: "news" | "article"; data: IHotDtos }) {
  const [ArticleModal, setArticleModal] = useState(false);
  return (
    <>
      <Article>
        <div onClick={() => setArticleModal(true)}>
          {data?.img && <img src={data?.img} alt={data?.title} />}
          <article>
            <p>{data?.title}</p>
            <span>{type === "news" ? data?.media : data?.subTitle}</span>
          </article>
        </div>
      </Article>
      {ArticleModal && type === "news" && (
        <NewsModal
          setArticleModal={setArticleModal}
          id={data?.id}
          title={data?.title}
          media={data?.media}
          img={data?.img}
          content={data?.content}
          assetCode={data?.assetCode}
          assetName={data?.assetName}
        />
      )}
    </>
  );
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
`;

export default Card;
