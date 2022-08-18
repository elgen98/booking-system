import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>
        Are you the admin? <Link to="admin">SIGN IN HERE</Link>{" "}
      </p>
    </footer>
  );
}
