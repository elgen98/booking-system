import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div className="h-2/4 md:mt-12">
        <div className="flex justify-center">
          <img
            src="../assets/Såja.png"
            alt="Såja text"
            className="flex items-center w-3/5 md:w-1/5"
          />
        </div>
        <h2 className="text-xl font-libre ml-12 w-4/5 md:text-2xl md:mt-6 md:ml-0 md:w-full">
          Din bookning på VuxenJuice har blivit avbokad.
        </h2>
        <h2 className="text-xl font-libre underline ml-4 md:text-2xl">
          <Link to={"/booking"}>Boka gärna en ny</Link>
        </h2>
      </div>
    </>
  );
}
