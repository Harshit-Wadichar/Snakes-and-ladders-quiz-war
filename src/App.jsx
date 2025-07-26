import React, { useRef, useState } from "react";
import { Dice, Quiz, Board, Info, HelpPage } from "./components";

function App() {
  const [pos1, setPos1] = useState(1);
  const [pos2, setPos2] = useState(30);
  const [r1, setr1] = useState(0);
  const [r2, setr2] = useState(0);
  const [w1, setw1] = useState(0);
  const [w2, setw2] = useState(0);

  const [disableRoll1, setDisableRoll1] = useState(false);
  const [disableRoll2, setDisableRoll2] = useState(false);

  const gameOver = pos1 === 49 || pos2 === 49; // New game over flag

  const quiz1Ref = useRef();
  const quiz2Ref = useRef();

  const handleRoll = (player, steps) => {
    if (player === 1) {
      const target1 = pos1 + steps;
      if (target1 > 49) {
        setPos1(pos1);
      } else {
        setPos1(target1); // cap at 49
      }

      if (target1 === 49) setDisableRoll1(true);
    } else {
      const target2 = pos2 + steps;
      if (target2 > 49) {
        setPos2(pos2);
      } else {
        setPos2(target2); // cap at 49
      }

      if (target2 === 49) setDisableRoll2(true);
    }
  };

  const handleRoll1 = () => {
    if (!gameOver) {
      // Only get question if game not over
      quiz1Ref.current.getMathQuestion(1);
    }

    setDisableRoll1(true);
  };

  const handleRoll2 = () => {
    if (!gameOver) {
      // Only get question if game not over
      quiz2Ref.current.getMathQuestion(2);
    }

    setDisableRoll2(true);
  };

  const handleAnswer1 = (wasCorrect) => {
    if (wasCorrect && !gameOver) {
      // Only re-enable if game not over

      setDisableRoll1(false);

      setr1((r1) => r1 + 1);
    } else if (!wasCorrect && !gameOver) {
      setw1((w1) => w1 + 1);
      setTimeout(() => {
        quiz1Ref.current.getMathQuestion(1);
      }, 1000);
    }
  };

  const handleAnswer2 = (wasCorrect) => {
    if (wasCorrect && !gameOver) {
      // Only re-enable if game not over

      setDisableRoll2(false);

      setr2((r2) => r2 + 1);
    } else if (!wasCorrect && !gameOver) {
      setw2((w2) => w2 + 1);
      setTimeout(() => {
        quiz2Ref.current.getMathQuestion(2);
      }, 1000);
    }
  };

  const [image, setImage] = useState(false);

  const reset = () => {
    setPos1(1);
    setPos2(1);
    setDisableRoll1(false);
    setDisableRoll2(false);
    setImage(true);
  };

  return (
    <>

    <HelpPage />
    
      <div className="mx-auto rotate-90 p-5 sm:rotate-0 mt-10 sm:mt-0 items-center">
        <div className="w-[90vh] sm:w-[95vw] grid grid-cols-[1fr_auto_1fr] items-start gap-6 justify-center ">
          {/* Player 1 Column */}
          <div className=" flex flex-col items-center gap-4 ">
            <Dice
              label="Player 1"
              className="bg-red-500"
              onRoll={handleRoll1}
              onClick={handleRoll}
              disableRoll={disableRoll1 || gameOver} // Disable when game over
              player={1}
              diceImage={image}
            />
            {!gameOver && ( // Only show quiz if game not over
              <Quiz ref={quiz1Ref} onAnswer={handleAnswer1} />
            )}
            {gameOver && (
              <Info right={r1} wrong={w1} player={1} onButtonClick={reset} />
            )}
          </div>

          {/* Center Board */}
          <div className="w-full flex justify-center">
            <Board t1={pos1} t2={pos2} />
          </div>

          {/* Player 2 Column */}
          <div className=" flex flex-col items-center gap-4 ">
            <Dice
              label="Player 2"
              className="bg-blue-400"
              onRoll={handleRoll2}
              onClick={handleRoll}
              disableRoll={disableRoll2 || gameOver} // Disable when game over
              player={2}
              diceImage={image}
            />
            {!gameOver && ( // Only show quiz if game not over
              <Quiz ref={quiz2Ref} onAnswer={handleAnswer2} />
            )}
            {gameOver && (
              <Info right={r2} wrong={w2} player={2} onButtonClick={reset} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
