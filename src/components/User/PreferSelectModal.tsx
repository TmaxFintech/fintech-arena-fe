import React, { useState } from "react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import useSWR from "swr";
import { COLOR, SHADOW } from "src/styles/PALLETS";
import { PreferSelectedDataType } from "src/types/UserType";

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
  const [corpValue, setCorpValue] = useState("");

  const serachURL = "";
  //   const { data, error } = useSWR(serachURL + corpValue, (...args) =>
  //     fetch(...args).then((res) => res.json())
  //   );

  const data: PreferSelectedDataType[] = [
    { assetName: "삼성전자", assetCode: '005930' },
    { assetName: "LG에너지솔루션", assetCode: '373220' },
    { assetName: "SK텔레콤", assetCode: '017670' },
    { assetName: "현대중공업", assetCode: '329180' },
    { assetName: "이마트", assetCode: '139480' },
    { assetName: "아모레퍼시픽", assetCode: '090430' },
  ];

  const deleteCorp = (e: React.MouseEvent<HTMLUListElement>) => {
    let targetText = (e.target as HTMLUListElement).innerText;
    setGetPreferCorp(
      getPreferCorp.filter((value) => value.assetName !== targetText)
    );
  };
  return createPortal(
    <>
      <Container>
        <input
          type="text"
          value={corpValue}
          onChange={(e) => setCorpValue(e.target.value)}
          placeholder="기업 이름을 입력하세요."
          autoFocus={true}
        />
        <List>
          {data ? (
            data.map((value, idx) => (
              <li
                key={idx}
                style={{color: getPreferCorp.some(
                    (arr) => arr.assetName == value.assetName
                  ) ? "#888" : "#000"}}
                onClick={() => {
                  if (
                    getPreferCorp.length < 3 &&
                    !getPreferCorp.some(
                      (arr) => arr.assetName == value.assetName
                    )
                  ) {
                    setGetPreferCorp([
                      ...getPreferCorp,
                      {
                        assetCode: value.assetCode,
                        assetName: value.assetName,
                      },
                    ]);
                  }
                }}
              >
                <span>{value.assetCode}</span> <strong>{value.assetName}</strong>
                <i className="corp-selected">
                  {getPreferCorp.some(
                    (arr) => arr.assetName == value.assetName
                  ) && "✓"}
                </i>
              </li>
            ))
          ) : (
            <div>검색 결과가 없습니다.</div>
          )}
        </List>
        <Selected onClick={deleteCorp}>
          {getPreferCorp.map((value, idx) => (
            <li key={idx}>{value.assetName}</li>
          ))}
        </Selected>
        <Button
          type="button"
          style={{backgroundColor: getPreferCorp.length < 3 ? "silver" : ""}}
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
  input {
    width: 100%;
    margin: 0 0 12px;
    font-size: 1.1rem;
  }
`;
const List = styled.ul`
flex:3;
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
