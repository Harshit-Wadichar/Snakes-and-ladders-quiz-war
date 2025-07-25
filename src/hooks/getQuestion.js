import React from 'react'

function getQuestion() {
  
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let question, answer;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            question = `${num1} + ${num2}`;
            break;
        case '-':
            answer = num1 - num2;
            question = `${num1} - ${num2}`;
            break;
        case '*':
            answer = num1 * num2;
            question = `${num1} * ${num2}`;
            break;
        case '/':
            // Ensure num2 is not zero and num1 is a multiple of num2
            num2 = num2 === 0 ? 1 : num2;
            answer = Math.floor(num1 / num2) * num2;
            question = `${answer} / ${num2}`;
            answer = answer / num2;
            break;
    }

    const correctAnswer =  Math.round(answer);

    // Generate some random options close to the correct answer
    const options = new Set([correctAnswer]);
    while (options.size < 4) {
        const variation = Math.floor(Math.random() * 10) - 5; // Variations between -5 and +5
        const randomOption = correctAnswer + variation;
        options.add(randomOption);
    }

    // Shuffle the options
    const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);
    
    return { question, correctAnswer, options: shuffledOptions };

}

export default getQuestion