import React, { useState, useEffect } from "react";

function Dice({ label, className, onRoll,onClick, disableRoll, player, diceImage }) {
  
 
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [diceface, setDiceface] = useState("dice");
  const [dicefacevisible, setDicevisible] = useState("hidden");
  const [dice, setDice] = useState("");
  const [gif, setGif] = useState("hidden");

  const diceFaces = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

  function Roll() {
    setbuttonDisable(true);
    setDice("hidden");
    setGif("");
    setDicevisible("hidden");
    const random = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setbuttonDisable(false);
      setGif("hidden");
      setDiceface(diceFaces[random - 1]);
      setDicevisible("");
      if (onRoll) onRoll();
      onClick?.(player, random);
    }, 2000);

   


  }

 useEffect(() => {
  if (diceImage) {
    setbuttonDisable(false);
    setDicevisible("hidden");
    setDice("");
    setGif("hidden");
  }
}, [diceImage]);

  return (
    <div
      id="controls"
      className="
        w-full 
        bg-white border border-black
        rounded-lg
        text-xs sm:text-sm
        flex flex-col items-center gap-3
        mx-auto
      "
    >
      <div
        id="yellow"
        className={`w-full ${className} p-1 sm:p-2 rounded-t-lg text-center`}
      >
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">
          {label}
        </h2>
      </div>

      {/* Dice display */}
      <div className="w-full h-[10vh] min-h-[120px] max-h-[160px] flex items-center justify-center">
        <img
          src="/image/dice.jpg"
          alt="dice-image"
          className={`max-h-[90%] w-auto ${dice}`}
           onPointerDown={buttonDisable || disableRoll ? undefined : Roll}
        />
        <img
          src={`/image/${diceface}.png`}
          alt="dice face"
          className={`max-h-[50%] w-auto ${dicefacevisible}`}
           onPointerDown={buttonDisable || disableRoll ? undefined : Roll}
        />
        <img
          src="/image/diceroll.gif"
          alt="gif"
          className={`max-h-[150%] w-auto ${gif}`}
         
        />
      </div>

      {/* Buttons */}
     
    </div>
  );
}

export default Dice;