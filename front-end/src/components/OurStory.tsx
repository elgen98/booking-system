import React from "react";

function OurStory() {
  return (
    <div className="bg-[#A9C1A9] text-left">
      <div className="">
        <div className="grid grid-cols-2">
          <div className="p-10">
            <h2 className="uppercase text-xl">Våran historia</h2>
            <span className=" text-5xl">Från druvor till juice för vuxna</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              saepe minus obcaecati explicabo non in sint, soluta ipsa voluptas
              maiores vero et voluptates nostrum ad animi minima est accusamus
              iure!
            </p>
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
