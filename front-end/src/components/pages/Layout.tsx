import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
