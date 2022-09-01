import { Link } from "react-router-dom";

function BookingModalFour() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main className=" h-3/5 flex flex-col gap-4">
      <h1 className="underline text-lg">Nu är du redo för en riktig smakupplevelse!</h1>
      <h1>Tack för din bokning!</h1>
      <nav className="flex justify-center gap-3 text-sm">
        <Link className=" rounded-lg pl-1 pr-1 bg-blue-400 hover:bg-blue-500 drop-shadow-md" to="/">Tillbaka till Startsidan</Link>
        <button className=" rounded-lg pl-1 pr-1 bg-blue-400 hover:bg-blue-500 drop-shadow-md" onClick={refreshPage}>Ny Bokning</button>
      </nav>
    </main>
  );
}

export default BookingModalFour;
