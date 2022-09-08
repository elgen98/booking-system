import React from "react";

function OurStory() {
  return (
    <div className="bg-[#A9C1A9] text-left">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10">
            <h2 className="uppercase text-xl">Våran historia</h2>
            <span className=" text-5xl">Från druvor till juice för vuxna</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              saepe minus obcaecati explicabo non in sint, soluta ipsa voluptas
              maiores vero et voluptates nostrum ad animi minima est accusamus
              iure!
            </p>
            <div className="flex justify-center items-center mt-4 ">
              <a href="#menu" className="text-xl rounded-lg bg-light-brown pr-2 pl-2">Se våran meny</a>
            </div>
          </div>  
          <div>
            <img src={require("../assets/wine.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
