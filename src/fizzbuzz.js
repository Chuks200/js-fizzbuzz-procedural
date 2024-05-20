const answer = []

// Write your code below this line
// src/fizzbuzz.js

for (let i = 1; i <= 15; i++) {
    let output = '';
  if (i % 3 === 0) output += 'Fizz'
 if (i % 5 === 0) output += 'Buzz'
    answer.push(output || i)
}

console.log(answer)
module.exports = answer  // Assuming this is needed for the test setup


// Don't touch the code below this line, we'll cover it later
module.exports = answer
