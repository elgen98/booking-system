import React from "react";

function Latest() {
  return (
    <div className="wrap text-left py-10">
      <h2 className="uppercase mb-5 text-xl">Omnämningar</h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
          <div>
            <h3 className="uppercase font-light">Dagens Nyheter</h3>
            <p className=" text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur</p>
            <a className="underline text-sm" href="#">
              Läs mer
            </a>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://via.placeholder.com/300x270"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
          <div>
            <h3 className="uppercase font-light">Dagens Nyheter</h3>
            <p className=" text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur</p>
            <a className="underline text-sm" href="#">
              Läs mer
            </a>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://via.placeholder.com/300x270"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
          <div>
            <h3 className="uppercase font-light">Dagens Nyheter</h3>
            <p className=" text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur</p>
            <a className="underline text-sm" href="#">
              Läs mer
            </a>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://via.placeholder.com/300x270"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
