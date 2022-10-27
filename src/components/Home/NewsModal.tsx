import React, { Dispatch } from "react"
import styled from "@emotion/styled"
import { createPortal } from "react-dom"
import { IHotDtos } from "src/types/HotDataType"
import { COLOR, SHADOW } from "src/styles/PALLETS"

interface NewsModalPropsType extends IHotDtos {
  setArticleModal: React.Dispatch<React.SetStateAction<boolean>>
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
}: NewsModalPropsType) {
  return createPortal(
    <Container>
      <Close onClick={() => setArticleModal(false)}>×</Close>
      <Title>{title}</Title>
      <Media>{media}</Media>
      <AssetTag>
        {assetName}({assetCode})
      </AssetTag>
      <Img src={img} alt={title} />
      <Content>{content}</Content>
    </Container>,
    document.getElementById("modal")!
  )
}

const Container = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 84%;
  height: 76%;
  padding: 32px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: ${SHADOW.basic};
  transform: translate(-50%, -55%);
`

const Close = styled.button`
  cursor: pointer;
  float: right;
  padding: 2px 8px;
  margin: -24px;
  font-size: 1.6rem;
  border-radius: 8px;
  &:hover {
    background-color: rgba(${COLOR.mainrgb}, 0.25);
  }
`
const Title = styled.h3`
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.5rem;
`
const Media = styled.p`
  margin: 12px 0 20px;
  font-size: 1.05rem;
`
const AssetTag = styled.div`
  display: inline-block;
  padding: 12px 8px;
  background-color: rgba(${COLOR.mainrgb}, 0.25);
  color: ${COLOR.main};
  font-weight: 600;
  border-radius: 8px;
`
const Img = styled.img`
  display: block;
  margin: 28px auto;
  width: 100%;
`
const Content = styled.p`
  line-height: 1.35rem;
  white-space: pre-wrap;
`
export default NewsModal
