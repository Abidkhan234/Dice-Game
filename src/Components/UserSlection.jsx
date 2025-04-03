import React, { useState } from "react";

const UserSlection = ({
  selectedNum,
  setSlectedNum,
  toggleClasses,
  score,
  setSlectedBtn,
  error,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="score flex flex-col gap-1 items-center">
          <h1 className="text-6xl font-bold">{score}</h1>
          <span className="text-lg font-semibold">Total Score</span>
        </div>
        <div className="flex flex-col gap-1 w-[50%] items-end">
          <p className="font-semibold text-lg text-red-500">{error}</p>
          <div className="numbers flex justify-between items-center w-full flex-wrap gap-2">
            {numbers.map((v, i) => {
              return (
                <button
                  onClick={(e) => {
                    setSlectedNum(v);
                    toggleClasses(e.target);
                    setSlectedBtn(e.target);
                  }}
                  key={i}
                  className="py-3 px-5 border-2 text-lg font-semibold  cursor-pointer  rounded-sm"
                >
                  {v}
                </button>
              );
            })}
          </div>
          <p className="text-lg font-semibold">Select Number</p>
        </div>
      </div>
    </div>
  );
};

export default UserSlection;
