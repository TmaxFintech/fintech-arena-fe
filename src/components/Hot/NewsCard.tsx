import React, { useState } from "react";
import styled from "@emotion/styled";
import NewsModal from "../Home/NewsModal";
import { IHotNewsDtos } from "src/types/HotDataType";

function NewsCard({ value }: { value: IHotNewsDtos }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Container onClick={() => setShowModal(true)}>
        <img src={value?.img} alt={value?.title} />
        <h3>{value?.title}</h3>
        <p>{value?.content?.slice(0, 40)}</p>
        <span>{`${value?.media} | ${value?.time}`}</span>
      </Container>
      {showModal && (
        <NewsModal
          setArticleModal={setShowModal}
          id={value?.id}
          title={value?.title}
          media={value?.media}
          img={value?.img}
          content={value?.content}
          assetCode={value?.assetCode}
          assetName={value?.assetName}
          time={value?.time}
        />
      )}
    </>
  );
}

const Container = styled.article`
  cursor: pointer;
  margin: 12px 0 0;
  padding: 12px;
  line-height: 1.35rem;
  img {
    float: left;
    margin: 0 12px 0 0;
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 20px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    margin: 4px 0 0;
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 300;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span {
    font-size: 0.85rem;
    font-weight: 300;
    opacity: 0.5;
  }
`;
export default NewsCard;
