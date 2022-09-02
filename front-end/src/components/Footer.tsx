import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" flex items-center justify-between p-2 h-1/5">
      <p className=" text-sm sm:text-base">
        Öppettider: <br />
        Mån - Fre 18:00 - 24:00 <br />
        Lör - Sön 18:00 - 24:00
      </p>
      <p className=" text-sm sm:text-base">
        Are you the admin? <Link to="admin">SIGN IN HERE</Link>{" "}
      </p>
    </footer>
  );
}
