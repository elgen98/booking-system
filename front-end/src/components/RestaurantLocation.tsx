import React from "react";
import { IconContext } from "react-icons";
import { ImInstagram, ImFacebook2, ImTwitter } from "react-icons/im";
export default function RestaurantLocation() {
  return (
    <>
      <IconContext.Provider value={{ size: "50" }}>
        <main className=" grid grid-cols-5">
          <section className=" col-span-2 flex flex-col justify-evenly">
            <h1>Kontaktinformation</h1>
            <p>Email: info@vuxenjuice.se</p>
            <p>Telefon: 0734556789</p>
          </section>
          <section className=" col-span-3 m-8 h-3/5">
            <div className=" flex flex-row">
              <div className=" flex flex-col gap-3 justify-center">
                <p>Adress: Sveavägen 46</p>
                <p>Telefon: 0864567</p>
                <p>Email: myndighetskallaren@vuxenjuice.se</p>
              </div>
              <div className=" w-3/4 p-2">
                <h3>VuxenJuice Stockholm: Myndighetskällaren</h3>
                <img
                  className=" w-full"
                  src="../assets/pasadena-gallery-6.jpg"
                  alt="Stockholm_Location"
                />
              </div>
            </div>
          </section>
        </main>
        <div className=" flex items-center justify-center gap-3">
          <ImInstagram />
          <ImFacebook2 />
          <ImTwitter />
        </div>
      </IconContext.Provider>
    </>
  );
}
