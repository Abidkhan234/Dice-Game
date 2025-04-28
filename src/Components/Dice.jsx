import React from "react";

import diceImage1 from "../assets/Images/dice_1.png";

const Dice = ({
  generateRandomNumber,
  imageElem,
  setScore,
  setToggle,
  toggle,
}) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="box flex flex-col gap-5">
        <div className="">
          <button
            onClick={() => {
              generateRandomNumber();
            }}
            className="cursor-pointer flex justify-center"
          >
            <img
              ref={imageElem}
              src={diceImage1}
              alt=""
              className="w-[50%] h-[50%] object-cover"
            />
          </button>
          <p className="text-lg font-semibold text-center">
            Click on Dice to roll.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <button
            onClick={() => setScore(0)}
            className="py-0.5 px-6 font-semibold text-lg border-2 rounded-sm cursor-pointer"
          >
            Reset Score
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="py-0.5 px-6 font-semibold text-lg bg-black text-white rounded-sm cursor-pointer"
          >
            Show Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dice;
