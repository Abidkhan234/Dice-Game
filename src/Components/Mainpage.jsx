import React, { useEffect, useState } from "react";
import UserSlection from "./UserSlection";
import Dice from "./Dice";
import Rules from "./Rules";

import diceImage1 from "../assets/Images/dice_1.png";
import diceImage2 from "../assets/Images/dice_2.png";
import diceImage3 from "../assets/Images/dice_3.png";
import diceImage4 from "../assets/Images/dice_4.png";
import diceImage5 from "../assets/Images/dice_5.png";
import diceImage6 from "../assets/Images/dice_6.png";

const Mainpage = () => {
  const images = [
    diceImage1,
    diceImage2,
    diceImage3,
    diceImage4,
    diceImage5,
    diceImage6,
  ];

  const imageElem = React.useRef();

  const [slectedNum, setSlectedNum] = useState(0);
  const [slectedBtn, setSlectedBtn] = useState("");
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [toggle, setToggle] = useState(false);

  const toggleClasses = (btn) => {
    if (btn === undefined) return;

    btn.classList.toggle("bg-black");
    btn.classList.toggle("text-white");
  };

  const generateRandomNumber = () => {
    if (slectedBtn === "") {
      setError("Slect a number.");
      return;
    }

    let randomNum = Math.floor(Math.random() * 6);

    imageElem.current.src = images[randomNum];

    if (slectedNum === randomNum) {
      setScore((v) => v + slectedNum);
    } else {
      setScore((v) => v - 2);
    }
    setError("");
    setSlectedBtn("");
    toggleClasses(slectedBtn);
  };

  return (
    <div className="max-[425px]:px-4 px-10 pt-5 flex flex-col gap-7">
      <UserSlection
        slectedNum={slectedNum}
        setSlectedNum={setSlectedNum}
        toggleClasses={toggleClasses}
        score={score}
        setSlectedBtn={setSlectedBtn}
        error={error}
      />
      <Dice
        generateRandomNumber={generateRandomNumber}
        imageElem={imageElem}
        setScore={setScore}
        setToggle={setToggle}
        toggle={toggle}
      />

      {toggle && <Rules />}
    </div>
  );
};

export default Mainpage;
