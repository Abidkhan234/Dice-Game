import React, { useEffect, useState } from "react";

const EntryPage = ({ isplayed, setIsplayed }) => {
  return (
    <div className="flex justify-center items-center h-screen w-full px-5">
      <div className="grid grid-cols-12 gap-3 w-full">
        <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 flex justify-center">
          <img
            src="public\Images\Dices-Image.png"
            alt=""
            className="lg:max-w-full min-[450px]:max-w-[50%] h-auto"
          />
        </div>
        <div className="lg:col-span-6 col-span-12 order-2">
          <div className="flex flex-col gap-5 justify-center h-full items-center">
            <h1 className="font-bold sm:text-8xl text-5xl">Dice Game</h1>
            <button
              onClick={() => setIsplayed(!isplayed)}
              className="text-lg font-semibold py-1 px-5 rounded-sm bg-black text-white lg:self-end lg:me-22 cursor-pointer active:bg-[#333]"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
