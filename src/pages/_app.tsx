import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import { Layout } from "src/components/Layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Modal id="modal"></Modal>
    </Layout>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  z-index: 999;
`;

export default MyApp;
