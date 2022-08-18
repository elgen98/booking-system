import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-evenly p-7">
      <nav>
        <ul className="flex flex-row gap-7 font-bold">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>Meny</li>
          <li>
            <img className=" w-12" src="../assets\logo.png" alt="logo" />
          </li>
          <li>
            <Link to="booking">Bord</Link>
          </li>
          <li>
            <Link to="contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
