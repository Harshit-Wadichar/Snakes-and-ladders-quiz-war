import { useState, useEffect } from "react";

function Board({ t1, t2 }) {

  useEffect(() => {
    setTarget1(t1);
    setTarget2(t2);
  },[t1, t2]);

  const [target1, setTarget1] = useState(t1);
  const [target2, setTarget2] = useState(t2);

  const [position1, setPosition1] = useState(1);
  const [position2, setPosition2] = useState(1);

  const snakes = {
    16: 4,
    39: 15,
  }

  const ladders = {
    3:27,
    30:46,
    20:32,
  };

useEffect(() => {
  const interval1 = setInterval(() => {
    if (target1 === 1) {
      setPosition1(1);
    } else if (position1 < target1) {
      setPosition1((old) => old + 1);
    } else if (position1 === target1) {
      if (snakes[target1]) {
        setTarget1(snakes[target1]);
      }else if (ladders[target1]) {
        setTarget1(ladders[target1]);
      }
    } else if (position1 > target1) {
      setPosition1((old) => old - 1);
    } else {
      clearInterval(interval1);
    }
  }, 300);

  return () => clearInterval(interval1);
}, [position1, target1, snakes]);

useEffect(() => {
  const interval2 = setInterval(() => {
    if (target2 === 1) {
      setPosition2(1);
    } else if (position2 < target2) {
      setPosition2((old) => old + 1);
    } else if (position2 === target2) {
      if (snakes[target2]) {
        setTarget2(snakes[target2]);
      }else if (ladders[target2]) {
        setTarget2(ladders[target2]);
      }
    } else if (position2 > target2) {
      setPosition2((old) => old - 1);
    } else {
      clearInterval(interval2);
    }
  }, 300);

  return () => clearInterval(interval2);
}, [position2, target2, snakes]);

  const [cells] = useState(
    // creates [null, null, …, null] length 49
    Array.from({ length: 49 }, () => null)
  );



  return (
    <>
      {position1 === 49 || position2 === 49 ? (
        <div
          className={`bg-[url('/image/trophy.png')] bg-cover bg-center w-[300px] h-[300px] border border-black text-center text-[40px] font-bold text-white ${
            position1 === 49 && position2 === 49
              ? 'bg-purple-500'
              : position1 === 49
              ? 'bg-red-500'
              : 'bg-blue-500'
          } rounded-xl`}
        >
          {position1 === 49 && position2 === 49
            ? 'TIE'
            : `Player ${position1 === 49 ? '1' : '2'} wins!`}
        </div>
      ) : (
        <div
          className="grid grid-cols-7 gap-1 bg-white border border-black p-1"
        >
          {cells.map((_, i) => (
            <div
              key={i}
              className={`w-12 h-12 md:h-16 md:w-16 lg:h-20 lg:w-20 border border-white flex items-center justify-center rounded-md ${
                i === 48
                  ? "bg-green-600 bg-[url('/image/trophy.png')] bg-cover bg-center"
                  : position1 === i + 1 && position2 === i + 1
                  ? "bg-purple-300"
                  : position1 === i + 1
                  ? "bg-red-300"
                  : position2 === i + 1
                  ? "bg-blue-300"
                  :i === 3
                  ? "bg-[#4e5d6c] bg-[url('/image/greenTail.png')] bg-cover bg-center"
                  :i === 9
                  ? "bg-[#4e5d6c] bg-[url('/image/greenBody.png')] bg-cover bg-center"
                  :i === 15
                  ? "bg-[#4e5d6c] bg-[url('/image/greenHead.png')] bg-cover bg-center"
                   :i === 14
                  ? "bg-[#4e5d6c] bg-[url('/image/yellowTail.png')] bg-cover bg-center"
                   :i === 22
                  ? "bg-[#4e5d6c] bg-[url('/image/yellowBody.png')] bg-cover bg-center"
                   :i === 30
                  ? "bg-[#4e5d6c] bg-[url('/image/yellowBody.png')] bg-cover bg-center"
                  :i === 38
                  ? "bg-[#4e5d6c] bg-[url('/image/yellowHead.png')] bg-cover bg-center"
                   :i === 2
                  ? "bg-[#4e5d6c] bg-[url('/image/blueLadder.png')] bg-cover bg-center"
                   :i === 10
                  ? "bg-[#4e5d6c] bg-[url('/image/blueLadder.png')] bg-cover bg-center"
                   :i === 18
                  ? "bg-[#4e5d6c] bg-[url('/image/blueLadder.png')] bg-cover bg-center"
                   :i === 26
                  ? "bg-[#4e5d6c] bg-[url('/image/blueLadder.png')] bg-cover bg-center"
                   :i === 29
                  ? "bg-[#4e5d6c] bg-[url('/image/purpleLadder.png')] bg-cover bg-center"
                   :i === 37
                  ? "bg-[#4e5d6c] bg-[url('/image/purpleLadder.png')] bg-cover bg-center"
                   :i === 45
                  ? "bg-[#4e5d6c] bg-[url('/image/purpleLadder.png')] bg-cover bg-center"
                   :i === 19
                  ? "bg-[#4e5d6c] bg-[url('/image/brownLadder.png')] bg-cover bg-center"
                   :i === 25
                  ? "bg-[#4e5d6c] bg-[url('/image/brownLadder.png')] bg-cover bg-center"
                   :i === 31
                  ? "bg-[#4e5d6c] bg-[url('/image/brownLadder.png')] bg-cover bg-center"
                  : "bg-[#4e5d6c]"
              }`}
            >
              {position1 === i + 1 ? (
                <div className="w-6 h-6 md:h-8 md:w-8 bg-red-500 rounded-full"></div>
              ) : null}
              {position2 === i + 1 ? (
                <div className="w-6 h-6 md:h-8 md:w-8 bg-blue-500 rounded-full"></div>
              ) : null}
              {position1 === i + 1 || position2 === i + 1 ? null : (
                <p className="text-[12px] sm:text-lg text-white">{i + 1}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Board;