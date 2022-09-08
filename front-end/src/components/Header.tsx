import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="wrap flex justify-between items-center p-3 bg-[#F4F3E7]">
      <nav>
        <ul className="flex flex-row gap-12">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="booking">
          <button className="px-4 py-1 bg-[#00473B] text-[#E6FF55] rounded-full">
            Boka bord
          </button>
        </Link>
      </div>
    </header>
  );
}
