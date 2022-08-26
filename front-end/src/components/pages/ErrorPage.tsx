import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="mt-12 h-2/4">
      <div className="flex justify-center">
        <img
          src="../assets/404.png"
          alt="404 error code"
          className="flex items-center w-1/5"
        />
      </div>
      <h1 className="mt-6 text-2xl font-libre">
        Uh Oh! This page dose not exist
      </h1>
      <h1 className="text-2xl font-libre">
        Maybe you clicked an old link or misspelled. Please try again…{" "}
      </h1>
      <Link to="/" className="mt-4 text-xl underline">
        Back to Home
      </Link>
    </div>
  );
}
