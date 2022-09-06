import { IconContext } from "react-icons";
import { ImInstagram, ImFacebook2, ImTwitter } from "react-icons/im";
export default function RestaurantLocation() {
  return (
    <>
      <IconContext.Provider value={{ size: "50" }}>
        <main className=" flex flex-col md:flex-row">
          <section className="flex flex-col justify-center border-b-2 border-black md:border-r-2  md:border-b-0">
            <div className="mb-2 md:mb-0 md:mr-10 md:ml-10">
              <h1 className="font-medium leading-tight text-4xl mb-2">
                Kontakt
              </h1>
              <p>Email: info@vuxenjuice.se</p>
              <p>Telefon: 0734556789</p>
              <div className=" flex items-center justify-center gap-3 mt-3 ">
                <ImInstagram color="#C13584" />
                <ImFacebook2 color="#4267B2" />
                <ImTwitter color="#1DA1F2" />
              </div>
            </div>
          </section>
          <section className=" col-span-4 h-3/5">
            <div className=" flex flex-col md:flex-row">
              <div className="flex flex-col gap-2 justify-center border-b-2 border-black md:border-b-0 md:ml-16">
                <div className="mb-2 md:mb-0">
                  <h1 className="font-medium leading-tight text-4xl mb-2 ">
                    Plats
                  </h1>
                  <p>Sveavägen 46</p>
                  <p>Telefon: 0864567</p>
                  <p>myndighetskallaren@vuxenjuice.se</p>
                </div>
              </div>
              <div className="flex flex-col self-center w-2/3 p-2 ml-18 md:ml-8">
                <h2 className="font-medium leading-tight text-2xl mb-2">
                  VuxenJuice Stockholm: Myndighetskällaren
                </h2>
                <img
                  className=" w-full"
                  src="../assets/pasadena-gallery-6.jpg"
                  alt="Stockholm_Location"
                />
              </div>
            </div>
          </section>
        </main>
      </IconContext.Provider>
    </>
  );
}
