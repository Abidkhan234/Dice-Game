import React, { useEffect, useState } from "react";
import UserSlection from "./UserSlection";
import Dice from "./Dice";
import Rules from "./Rules";

const Mainpage = () => {
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

    let randomNum = Math.ceil(Math.random() * 6);

    imageElem.current.src = `public/Images/dice_${randomNum}.png`;

    if (slectedNum === randomNum) {
      setScore((v) => v + slectedNum);
    } else {
      setScore((v) => v - 2);
    }
    setError("");
    setSlectedBtn("")
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
