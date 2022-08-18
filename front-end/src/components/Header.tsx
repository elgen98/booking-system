import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>placeholder name</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Meny</li>
          <li>
            <Link to="booking">Booking</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
