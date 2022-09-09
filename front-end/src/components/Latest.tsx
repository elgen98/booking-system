import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./../index.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function Latest() {
  return (
    <div className="wrap text-left py-20">
      <h2 className="uppercase mb-5 text-xl">Omnämningar</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
              <div>
                <h3 className="uppercase font-light">Dagens Nyheter</h3>
                <p className=" text-sm mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
              <div>
                <h3 className="uppercase font-light">Dagens Nyheter</h3>
                <p className=" text-sm mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
              <div>
                <h3 className="uppercase font-light">Dagens Nyheter</h3>
                <p className=" text-sm mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
              <div>
                <h3 className="uppercase font-light">Dagens Nyheter</h3>
                <p className=" text-sm mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 bg-[#E8DBC5] rounded-2xl p-5 gap-2">
              <div>
                <h3 className="uppercase font-light">Dagens Nyheter</h3>
                <p className=" text-sm mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Latest;
