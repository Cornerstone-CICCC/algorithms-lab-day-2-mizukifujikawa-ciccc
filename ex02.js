// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

function arrayDifference(arr1, arr2) {
    let res = []
    for(let num of arr1) {
        if(!arr2.includes(num)) {
            res.push(num);
        };
    }
    return res;
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]