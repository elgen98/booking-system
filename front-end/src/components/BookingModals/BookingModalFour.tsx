import { Link } from "react-router-dom";

function BookingModalFour() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <main className=" h-3/5">
      <h1 className="overline">Nu är du redo för en riktig smakupplevelse!</h1>
      <h1>Tack för din bokning!</h1>
      <Link to="/">Tillbaka till Startsidan</Link>
      <button onClick={refreshPage}>Ny Bokning</button>
    </main>
  );
}

export default BookingModalFour;
