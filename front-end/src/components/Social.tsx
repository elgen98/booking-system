import React from "react";

function Social() {
  return (
    <div className="bg-[#E8DBC5] text-left">
      <div className="grid grid-cols-2">
        <div className="p-10">
          <span className=" text-5xl">
            Kliv in i en värld fulla av recept på vår TikTok
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe
            minus obcaecati explicabo non in sint, soluta ipsa voluptas maiores
            vero et voluptates nostrum ad animi minima est accusamus iure!
          </p>
        </div>
        <div>
          <video autoPlay loop muted>
            <source src={require("../assets/cooking.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Social;
