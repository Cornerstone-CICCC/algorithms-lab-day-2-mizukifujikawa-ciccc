// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(input) {
    let words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  
    return words.join(' ');
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"