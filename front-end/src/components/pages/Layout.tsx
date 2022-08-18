import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>Header</header>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  );
}
