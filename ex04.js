// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(str) {
    const charCount = {};
    
    let maxCount = 0;
    let mostFrequent = '';
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        mostFrequent = char;
      }
    }
  
    return mostFrequent;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"