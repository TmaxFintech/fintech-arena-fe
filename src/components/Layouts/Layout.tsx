import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { COLOR } from "src/styles/PALLETS";
import Header from "./partials/Header";
import SubHeader from "./partials/SubHeader";

export const Layout = ({ children }: any) => {
  const router = useRouter();
  const subpageQuery = router.query;
  const pathName = router.pathname.split("/");
  const HeaderText: { [index: string]: string } = {
    debate: "금융핫토픽아레나",
    hot: "HOT",
    user: pathName[2] === "login" ? "로그인" : "회원가입",
  };

  return (
    <Container location={pathName[1] === "debate" && !!subpageQuery.id}>
      {pathName[1] === "" ? (
        <Header />
      ) : (
        <SubHeader text={HeaderText[pathName[1]]} />
      )}
      <main>{children}</main>
    </Container>
  );
};

const Container = styled.div<{ location: boolean }>`
  position: relative;
  left: 50%;
  max-width: 420px;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.location ? COLOR.main : "#fafafa")};
  transform: translateX(-50%);
  overflow: hidden;
  main {
    padding: 0 16px 80px;
    overflow-x: hidden;
  }
`;
