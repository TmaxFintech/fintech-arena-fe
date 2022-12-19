import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { COLOR, SHADOW } from "src/styles/PALLETS";

import { PreferSelectedDataType } from "src/types/UserType";
import { SocketReqResTypes } from "src/types/SocketResponse";

import AssetSearchSocket from "src/socket/AssetsSearch";

interface PreferSelectModalTypes {
  setViewModal: React.Dispatch<React.SetStateAction<boolean>>;
  getPreferCorp: PreferSelectedDataType[];
  setGetPreferCorp: React.Dispatch<
    React.SetStateAction<PreferSelectedDataType[]>
  >;
}

function PreferSelectModal({
  setViewModal,
  getPreferCorp,
  setGetPreferCorp,
}: PreferSelectModalTypes) {
  // const [corpValue, setCorpValue] = useState("");
  const corpValue = useRef<HTMLInputElement>(null);
  const [response, setResponse] = useState<SocketReqResTypes>();

  const SearchAssetKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AssetSearchSocket({
      body: corpValue.current.value,
      setResponse: setResponse,
    });
  };

  const deleteCorp = (e: React.MouseEvent<HTMLUListElement>) => {
    let targetText = (e.target as HTMLUListElement).innerText;
    setGetPreferCorp(
      getPreferCorp.filter((value) => value.assetName !== targetText)
    );
  };
  return createPortal(
    <>
      <Container>
        <form onSubmit={SearchAssetKeyword}>
          <input
            type="text"
            ref={corpValue}
            placeholder="기업 이름을 입력하세요."
            autoFocus={true}
          />
          <button type="submit">검색</button>
        </form>
        <List>
          {response?.body.response ? (
            response?.body.response.map((value, idx) => (
              <li
                key={idx}
                style={{
                  color: getPreferCorp.some(
                    (arr) => arr.assetName == value.asset_name
                  )
                    ? "#888"
                    : "#000",
                }}
                onClick={() => {
                  if (
                    getPreferCorp.length < 3 &&
                    !getPreferCorp.some(
                      (arr) => arr.assetName == value.asset_name
                    )
                  ) {
                    setGetPreferCorp([
                      ...getPreferCorp,
                      {
                        assetCode: value.asset_code,
                        assetName: value.asset_name,
                      },
                    ]);
                  }
                }}
              >
                <span>{value.asset_code}</span>{" "}
                <strong>{value.asset_name}</strong>
                <i className="corp-selected">
                  {getPreferCorp.some(
                    (arr) => arr.assetName == value.asset_name
                  ) && "✓"}
                </i>
              </li>
            ))
          ) : (
            <div className="search-no-result">검색 결과가 없습니다.</div>
          )}
        </List>
        <Selected onClick={deleteCorp}>
          {getPreferCorp.map((value, idx) => (
            <li key={idx}>{value.assetName}</li>
          ))}
        </Selected>
        <Button
          type="button"
          style={{ backgroundColor: getPreferCorp.length < 3 ? "silver" : "" }}
          onClick={() => {
            if (getPreferCorp.length === 3) {
              setGetPreferCorp(getPreferCorp);
              setViewModal(false);
            } else {
              alert("관심사 3개를 반드시 선택해야 합니다.");
            }
          }}
        >
          {getPreferCorp.length === 3 ? "확인" : "관심사 3개를 선택해주세요"}
        </Button>
      </Container>
      <Backdrop />
    </>,
    document.getElementById("modal")!
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 30%;
  left: 50%;
  width: 90%;
  height: 470px;
  padding: 32px;
  background-color: #fff;
  z-index: 9999;
  border-radius: 20px;
  box-shadow: ${SHADOW.basic};
  transform: translate(-50%, -30%);
  form {
    display: flex;
    margin: 0 0 12px;
    align-items: center;
    input {
      flex: 3;
      font-size: 1.1rem;
    }
    button {
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 8px;
      background-color: ${COLOR.main};
      color: #fff;
      font-weight: 500;
    }
  }
`;
const List = styled.ul`
  flex: 3;
  padding: 0 8px 0 0;
  overflow-y: scroll;
  li {
    cursor: pointer;
    display: block;
    padding: 16px 12px;
    border-bottom: 1px solid #dddddd;
    .corp-selected {
      display: block;
      float: right;
    }
    span {
      display: inline-block;
      width: 56px;
      font-size: 0.9rem;
    }
    strong {
      display: inline-block;
      font-weight: 500;
      font-size: 1.05rem;
    }
  }
  .search-no-result{
    margin: 24px auto;
    text-align: center;
  }
`;

const Selected = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  gap: 8px 20px;
  li {
    cursor: pointer;
    position: relative;
    padding: 6px 8px;
    background-color: #ececee;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    font-size: 0.95rem;
    line-height: 1rem;
    &::after {
      position: absolute;
      display: block;
      content: "×";
      right: -10px;
      top: -4px;
      background-color: ${COLOR.bull};
      width: 16px;
      height: 16px;
      border-radius: 100%;
      color: #fff;
      text-align: center;
      line-height: 16px;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 12px 20px;
  background-color: ${COLOR.main};
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
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

export default PreferSelectModal;
