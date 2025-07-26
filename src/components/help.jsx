import React,{useState} from 'react';

const HelpPage = () => {
    const [Hide, setHide] = useState("");
 return (
    <div className={`w-[100vw] min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4 md:p-6 ${Hide}`}>
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-100">
        {/* Header with decorative elements */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 px-6 text-center relative">
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-indigo-500/30"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-purple-500/30"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
            Snakes & Ladders Quiz War
          </h1>
          <p className="text-indigo-200 italic text-lg">Math Adventure Edition</p>
          <div className="mt-4 flex justify-center space-x-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-white/30"></div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          {/* Game Rules Section */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-indigo-800">Game Rules</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: '🎲', 
                  text: 'Players roll dice simultaneously by clicking their respective dice images' 
                },
                { 
                  icon: '🔒', 
                  text: 'Dice buttons become disabled after rolling until a correct answer is given' 
                },
                { 
                  icon: '❓', 
                  text: 'Each player receives a math question with four multiple-choice options' 
                },
                { 
                  icon: '✅', 
                  text: 'Correct answers re-enable the dice button for the next turn' 
                },
                { 
                  icon: '🔄', 
                  text: 'Incorrect answers trigger a new question until answered correctly' 
                },
                { 
                  icon: '➡️', 
                  text: 'Players advance their pieces according to their dice roll result' 
                },
                { 
                  icon: '🐍', 
                  text: 'Landing on a snake\'s head moves the player to its tail position' 
                },
                { 
                  icon: '🪜', 
                  text: 'Landing at the base of a ladder advances the player to its top position' 
                },
                { 
                  icon: '🏆', 
                  text: 'The first player to reach position 49 wins the game' 
                }
              ].map((rule, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-indigo-50 rounded-xl p-5 transition-all hover:bg-indigo-100 hover:shadow-sm"
                >
                  <span className="text-2xl mr-4 mt-0.5">{rule.icon}</span>
                  <p className="text-gray-700 font-medium">{rule.text}</p>
                </div>
              ))}
            </div>
          </section>

         

          {/* Game Flow Visualization */}
          <section className="mb-10">
            <h3 className="text-xl font-bold text-indigo-700 mb-6 text-center">Game Flow</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { step: '1', title: 'Roll Dice', icon: '🎲' },
                { step: '2', title: 'Solve Math Question', icon: '🧮' },
                { step: '3', title: 'Move Piece', icon: '➡️' },
                { step: '4', title: 'Trigger Events', icon: '🎯' },
                { step: '5', title: 'Reach Position 49', icon: '🏁' }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center -mt-4 z-10 relative">
                    {step.step}
                  </div>
                  <div className="bg-white border border-indigo-200 rounded-lg px-4 py-2 mt-2 shadow-sm">
                    <span className="font-medium text-gray-700">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hide Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setHide("hidden")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            >
             To Hide this Card click here 
            </button>
          </div>
        </div>
        
        {/* Footer */}
             <div className="bg-indigo-50 py-4 px-6 text-center text-gray-600 text-sm">
  © {new Date().getFullYear()} Snakes & Ladders Quiz War
  <br />
  Created by Harshit Wadichar
  <br />
  <a
    href="https://github.com/Harshit-Wadichar"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 hover:underline mx-2"
  >
    GitHub
  </a>
  |
  <a
    href="https://www.linkedin.com/in/harshit-wadichar-12b4482bb"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 hover:underline mx-2"
  >
    LinkedIn
  </a>
</div>
      </div>
    </div>
  );
};

export default HelpPage;