import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function Footer() {
  return (
    <footer className="wrap">
      <Marquee
        className="bg-[#F4F3E7] text-4xl cursor-pointer mb-10"
        gradient={false}
        pauseOnHover={true}
      >
        I säsong - Kantareller - Blomkål - Brysselkål - Jordärtskocka -
        Rotselleri - Själkselleri - Morötter - Palsternacka - Potatis
      </Marquee>
      <div className="flex items-center justify-between p-2 bg-[#F4F3E7]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-left gap-10">
          <div>
            <h3 className="mb-2 uppercase">Om oss</h3>
            <ol className=" text-sm">
              <li>Vår historia</li>
              <li>Recept</li>
              <li>Meny</li>
              <li>Press</li>
              <li>Sök jobb!</li>
            </ol>
          </div>
          <div>
            <h3 className="mb-2 uppercase">Social Medier</h3>
            <ol className=" text-sm">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>TikTok</li>
              <li>Spotify</li>
              <li>Facebook</li>
            </ol>
          </div>
          <div>
            <h3 className="mb-2 uppercase">Allmänna Villkor</h3>
            <ol className=" text-sm">
              <li>Integritetspolicy</li>
              <li>Säljer vi information?</li>
              <li>GDPR</li>
            </ol>
          </div>
          <div>
            <h3 className="mb-2 uppercase">Support & Services</h3>
            <ol className=" text-sm">
              <li>Store</li>
              <li>Gift Cards</li>
              <li>Contact us</li>
              <li>FAQs</li>
              <li>Catering</li>
            </ol>
          </div>
          <div></div>
          <div>
            <h3>Copyright 2022 Vuxenjuice</h3>
          </div>
        </div>
      </div>
      <div className="text-sm mb-0">
        Psst! Jobbar du här? Isåfall kan du logga in{" "}
        <span className="underline">
          <Link to="admin">här</Link>
        </span>
      </div>
    </footer>
  );
}
