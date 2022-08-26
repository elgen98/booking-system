function BookingModalTwo() {
  return (
    <>
      <h1>Modal Two</h1>
      <h1>Kundinformation</h1>
      <div>
        <form action="">
          <label>
            Namn
            <input type="text" name="" placeholder="Name" />
          </label>
          <label>
            E-postadress
            <input type="email" name="" placeholder="name@example.se" />
          </label>
          <label>
            Telefonnummer
            <input type="tel" name="" placeholder="1234567028" />
          </label>
          <textarea
            name=""
            cols={30}
            rows={8}
            placeholder="Frågor, önskemål eller alergier"
            className="resize-none"
          ></textarea>
          <br />
          <input className="cursor-pointer" type="submit" value="Spara" />
          <br />
          <button>Avbryt</button>
        </form>
      </div>
    </>
  );
}

export default BookingModalTwo;
