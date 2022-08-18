import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        Header
        <Link to="/">Home</Link>
        <Link to="booking">Booking</Link>
        <Link to="contact">Contact</Link>
      </header>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  );
}
