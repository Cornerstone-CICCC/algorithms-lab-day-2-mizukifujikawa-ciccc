// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
    let res = [];
    for(let char of str) {
        if(!res.includes(char) && char != ' ') {
            res.push(char);
        }
    }
    return res.length;
}

console.log(countConsonants("hello world")); // Expected output: 7