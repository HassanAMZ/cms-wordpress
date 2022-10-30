import Footer from "./footer";
import Meta from "./meta";
import NavBar from "./NavBar";
import { M_PLUS_Rounded_1c } from "@next/font/google";
const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({ weight: "400" });

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <NavBar />
      <main className={m_PLUS_Rounded_1c.className}>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
