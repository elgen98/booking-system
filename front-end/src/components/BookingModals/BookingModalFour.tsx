import { Link } from "react-router-dom";

function BookingModalFour() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main className=" modal-wrapper">
      <div className="modal-title mb-10">
        <img src="../assets/ProgressBar4.png" alt="progressBar" className="hidden sm:block" />
        <img src="../assets/ProgressBar4Mobile.png" alt="progressBar" className=" sm:hidden" />
        <img src="../assets/Tack!.png" alt="Tack!" className=" w-2/3 sm:w-1/3 sm:mt-10" />
      </div>
      <div className="col-span-8 row-start-1">
        <h1 className="underline text-lg sm:text-xl ">Nu är du redo för en riktig smakupplevelse!</h1>
        <p className="text-lg sm:text-xl mt-4">Vi har skickat en bekräftelse via e-post</p>
      </div>
      <nav className="flex justify-center gap-3 text-sm col-span-6 col-start-2 h-7 sm:col-span-2 sm:col-start-4">
        <Link className=" rounded-lg pl-1 pr-1 pt-1 sm:pt-0 bg-blue-400 hover:bg-blue-500 drop-shadow-md w-2/4 sm:text-lg " to="/">Startsidan</Link>
        <button className=" rounded-lg pl-1 pr-1 bg-blue-400 hover:bg-blue-500 drop-shadow-md w-2/4 sm:text-lg" onClick={refreshPage}>Ny Bokning</button>
      </nav>
    </main>
  );
}

export default BookingModalFour;
