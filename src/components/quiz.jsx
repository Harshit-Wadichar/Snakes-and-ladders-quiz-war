import React, { useState, forwardRef, useImperativeHandle } from "react";
import getQuestion from "../hooks/getQuestion";

const Quiz = forwardRef(({ onAnswer }, ref) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState("");
  const [result, setResult] = useState(null);
  const [optionsDisabled, setOptionsDisabled] = useState(false);

  async function getMathQuestion(player) {
    setOptionsDisabled(false);
    setResult("");
    const data = getQuestion();
    setQuestion(data.question);
    setCorrect(data.correctAnswer);
    setOptions(data.options);
  }

  useImperativeHandle(ref, () => ({
    getMathQuestion,
  }));

  function checkAnswer(option, player) {
    const isCorrect = option === correct;
    setResult(isCorrect ? "Correct!" : `Wrong! Ans is ${correct}`);
    setOptionsDisabled(true);
    if (onAnswer) onAnswer(isCorrect);
  }

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-slate-200 border border-black pb-3 sm:pb-4 rounded-lg text-sm sm:text-base flex flex-col items-center gap-4 mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 cursor-pointer select-none">
        Question
      </h1>
      <p className="text-lg sm:text-xl font-medium text-gray-700 text-center min-h-[1rem] mb-0">
        {question}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 sm:gap-7">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onPointerDown={() => checkAnswer(opt, 1)}
            disabled={optionsDisabled}
            className="px-2 sm:px-4 py-1 text-sm sm:text-base font-semibold text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-500 active:scale-95 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed transition"
          >
            {opt}
          </button>
        ))}
      </div>
      {result && (
        <p className={`text-base sm:text-lg font-bold ${result.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </div>
  );
});

export default Quiz;