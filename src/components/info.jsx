import React,{useState} from 'react'

function info({right, wrong,player, onButtonClick}) {
  return (
    <>
   <div className="w-full max-w-[95vw] sm:max-w-md md:max-w-lg mx-auto p-3 sm:p-4 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg">
  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 truncate">
    Player {player} Stats
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
    <div className="flex items-center p-2 sm:p-3 bg-green-100 rounded-xl">
      <span className="inline-flex items-center justify-center p-1 sm:p-2 bg-green-200 rounded-full mr-2 sm:mr-3 text-xs">
        ✔️
      </span>
      <div className="min-w-0">
        <p className="text-[12px] sm:text-sm text-green-800 truncate">Correct Ans</p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 truncate">{right}</p>
      </div>
    </div>
    <div className="flex items-center p-2 sm:p-3 bg-red-100 rounded-xl">
      <span className="inline-flex items-center justify-center p-1 sm:p-2 bg-red-200 rounded-full mr-2 sm:mr-3 text-xs">
        ❌
      </span>
      <div className="min-w-0">
        <p className="text-[12px] sm:text-sm text-red-800 truncate">Wrong Ans</p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-900 truncate">{wrong}</p>
      </div>
    </div>
  </div>
   <div className="flex w-full justify-between px-1 mt-3">
       
        <button
          className="flex-1 py-1.5 mx-1 text-xs sm:text-sm bg-blue-600 text-white rounded-lg"
          onClick={onButtonClick}
        >
          Reset
        </button>
      </div>
</div>
    
    </>
  )
}

export default info