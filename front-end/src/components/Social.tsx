import React from "react";

function Social() {
  return (
    <div className="bg-[#E8DBC5] text-left">
      <div className="grid grid-cols-4">
        <div className="p-10 md:col-span-2 col-span-4">
          <span className=" text-5xl">
            Kliv in i en värld fulla av recept på vår TikTok
          </span>
        </div>
        <div className="md:col-span-2 col-span-4">
          <video autoPlay loop muted>
            <source src={require("../assets/cooking.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Social;
