import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <p>404</p>
      <Link to="/">Back Home</Link>
    </>
  );
}
