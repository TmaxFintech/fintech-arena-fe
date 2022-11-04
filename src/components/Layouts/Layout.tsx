import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "./partials/Header";
import SubHeader from "./partials/SubHeader";
import MySocialList from "../Home/MySocialList";
import { COLOR } from "src/styles/PALLETS";

export const Layout = ({ children }: any) => {
  const router = useRouter();
  const subpageQuery = router.query;
  const asPath = router.asPath.split("/");

  const HeaderText: { [index: string]: string } = {
    debate: "금융핫토픽아레나",
    hot: "HOT",
    user: asPath[2] === "login" ? "로그인" : "회원가입",
  };

  return (
    <>
      <Main location={asPath[1] === "debate" && !!subpageQuery.id}>
        {asPath[1] === "" ? (
          <Header />
        ) : (
          <SubHeader text={HeaderText[asPath[1]]} />
        )}
        <main>{children}</main>
      </Main>
      {asPath[1] === "" && <MySocialList />}
    </>
  );
};

const Main = styled.div<{ location: boolean }>`
  position: absolute;
  left: 50%;
  max-width: 420px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.location ? COLOR.main : "#fafafa")};
  transform: translateX(-50%);
  main {
    padding: 0 16px 80px;
    overflow-x: hidden;
  }
`;
