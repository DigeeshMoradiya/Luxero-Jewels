import "@/styles/globals.css";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideLayout = router.pathname === "/login" || router.pathname === "/forgotpassword" || router.pathname === "/resetpassword";
  return <>
    {!hideLayout && <Header />}
    <Component {...pageProps} />
    {!hideLayout && <Footer />}
  </>
}
