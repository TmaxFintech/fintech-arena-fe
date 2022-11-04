import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { COLOR } from "src/styles/PALLETS";

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
        <button id="search">
          <span className="a11y-hidden">검색</span>
        </button>
        <button id="menu">
          <span className="a11y-hidden">menu</span>
        </button>
      </Buttons>
    </Container>
  );
}

const Container = styled.header<{ location: boolean }>`
  position: sticky;
  display: flex;
  padding: 32px 0 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.location ? COLOR.main : COLOR.background};
  z-index: 999;
  button {
    cursor: pointer;
    width: 44px;
    height: 44px;
  }
  div {
    filter: invert(${(props) => (props.location ? 1 : 0)});
  }
`;
const Back = styled.div`
  flex: 1;
  #back {
    background-image: url("/icon/arrow_back.svg");
  }
`;
const HeadTitle = styled.div`
  flex: 2;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;
const Buttons = styled.div`
  flex: 1;
  text-align: right;
  #search {
    background-image: url("/icon/search.svg");
  }
  #menu {
    background-image: url("/icon/menu.svg");
  }
`;

export default SubHeader;
