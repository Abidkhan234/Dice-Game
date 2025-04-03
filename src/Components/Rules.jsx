import React from "react";

const Rules = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-[#d1caca] py-2 px-3 w-full max-w-[450px] rounded-sm flex flex-col gap-2">
        <h4 className="font-bold text-2xl">How to play dice game</h4>
        <div>
          <ul className="flex flex-col gap-1 text-balance">
            <li className="font-semibold text-sm">Select any number.</li>
            <li className="font-semibold text-sm">Click on dice image.</li>
            <li className="font-semibold text-sm">
              after click on dice if selected number is equal to dice number you
              will get same point as dice.
            </li>
            <li className="font-semibold text-sm">
              if you get wrong guess then 2 point will be dedcuted.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
