import React, { Dispatch, useEffect } from "react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { IHotNewsDtos } from "src/types/HotDataType";
import { COLOR, SHADOW } from "src/styles/PALLETS";

interface NewsModalPropsType extends IHotNewsDtos {
  setArticleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewsModal({
  setArticleModal,
  id,
  title,
  media,
  img,
  content,
  assetCode,
  assetName,
  time,
}: NewsModalPropsType) {
  // 모달 켜질 때, 스크롤 움직임 방지
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return createPortal(
    <>
      <Container>
        <Title>{title}</Title>
        <Media>{media}</Media>
        <AssetTag>
          {assetName}({assetCode})
        </AssetTag>
        <Img src={img} alt={title} />
        <Content>{content}</Content>
      </Container>
      <Backdrop onClick={() => setArticleModal(false)} />
    </>,
    document.getElementById("modal")!
  );
}

const Container = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 76%;
  padding: 32px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: ${SHADOW.basic};
  transform: translate(-50%, -55%);
`;

const Title = styled.h3`
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.5rem;
`;
const Media = styled.p`
  margin: 12px 0 20px;
  font-size: 1.05rem;
`;
const AssetTag = styled.div`
  display: inline-block;
  padding: 12px 8px;
  background-color: rgba(${COLOR.mainrgb}, 0.25);
  color: ${COLOR.main};
  font-weight: 600;
  border-radius: 8px;
`;
const Img = styled.img`
  display: block;
  margin: 28px auto;
  width: 100%;
`;
const Content = styled.p`
  line-height: 1.35rem;
  white-space: pre-wrap;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
`;
export default NewsModal;
