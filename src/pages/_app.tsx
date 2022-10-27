import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "src/components/Layouts"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div id="modal"></div>
    </Layout>
  )
}

export default MyApp
