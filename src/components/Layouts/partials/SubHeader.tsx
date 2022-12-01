import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { COLOR } from "src/styles/PALLETS";
import Hamburger from "../Hamburger";

function SubHeader({ text }: { text: string }) {
  const router = useRouter();
  const subpageQuery = router.query;
  const asPath = router.asPath.split("/");

  return (
    <Container location={asPath[1] === "debate" && !!subpageQuery.id}>
      <Back>
        <button id="back" onClick={() => router.back()}>
          <span className="a11y-hidden">뒤로가기</span>
        </button>
      </Back>
      <HeadTitle>{text}</HeadTitle>
      <Buttons>
        <li>
          <button id="search">
            <span className="a11y-hidden">검색</span>
          </button>
        </li>
        <li id="hamburger">
          <Hamburger />
        </li>
      </Buttons>
    </Container>
  );
}

const BUTTON_STYLE = `
  cursor: pointer;
  padding: 0;
  width: 44px;
  height: 44px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.header<{ location: boolean }>`
  position: sticky;
  display: flex;
  padding: 32px 16px 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: ${(props) =>
    props.location ? COLOR.main : COLOR.background};
  div {
    filter: invert(${(props) => (props.location ? 1 : 0)});
  }
`;
const Back = styled.div`
  flex: 1;
  #back {
    ${BUTTON_STYLE}
    background-image: url("/icon/arrow_back.svg");
  }
`;
const HeadTitle = styled.div`
  flex: 2;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;
const Buttons = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 6;
  #search {
    ${BUTTON_STYLE}
    background-image: url("/icon/search.svg");
  }
`;

export default SubHeader;
