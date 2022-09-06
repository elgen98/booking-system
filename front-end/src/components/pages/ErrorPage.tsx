import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="mt-12 h-2/4">
      <div className="flex justify-center">
        <img
          src="../assets/404.png"
          alt="404 error code"
          className="flex items-center w-3/5 md:w-1/5"
        />
      </div>
      <h1 className="mt-6 text-xl font-libre md:text-2xl">
        Oh Nej! Denna sida existerar inte!
      </h1>
      <h1 className="text-xl font-libre ml-12 w-4/5 md:text-2xl md:w-full md:ml-0">
        Du kanske tryckte på en gammal länk eller skrev fel.
      </h1>
      <h1 className="text-xl font-libre underline md:text-2xl">
        <Link to="/">Försök gärna igen.</Link>
      </h1>
    </div>
  );
}
