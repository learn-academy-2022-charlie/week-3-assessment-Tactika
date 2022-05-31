// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------------------- Question 1 --------------------------------- //
// Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacciIt", () => {
    it("Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided", () => {
        const fibLength1 = 6
        const fibLength2 = 10
        expect(fibonacciIt(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciIt(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

/* Red Test Failed:
    FAIL  ./code-challenges.test.js
    fibonacciIt
        ✕ Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided (1 ms)
    ReferenceError: fibonacciIt is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code - fibonacciIt
Function Name: fibonacciIt
Parameters: 1 number, named num (greater than 2)
Logic: 
    - create array (fibArray)
    - arrays first two values will always be 1
    - if length is not equal to parameter, add first  value to 2nd value, then put at end of array
    if length not met, add 2nd value to third value and add result to end of array
    - repeat until length of the array equals parameter value.
    - return array
*/

const fibonacciIt = (num) => {
    const fibArray = [1, 1]
    while (fibArray.length !== num) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    }
    return fibArray
}
/* Green Test Passed
    PASS  ./code-challenges.test.js
    fibonacciIt
        ✓ Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided (2 ms)
*/

/* Refactor 
    - I can't think of another way to get the same results
*/



// --------------------------------- Question 2 --------------------------------- //
// Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("sortOddNums", () => {
    it("Take in an array containing any datatype and returns a new array of the odd numbers, sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        expect(sortOddNums(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortOddNums(fullArr2)).toEqual([-823, 7, 23])
    })
})

/* Red Test Failed Successfully
    FAIL  ./code-challenges.test.js
    fibonacciIt
        ✓ Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided (2 ms)
    sortOddNums
        ✕ Take in an array containing any datatype and returns a new array of the odd numbers, sorted from least to greatest (1 ms)
    ReferenceError: sortOddNums is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code: sortOddNums
Function Name: sortOddNums
Parameters: 1, array (can contain any datatype) param name is inputArr
Logic:
    -   create empty array, name it oddNumsArr
    -   iterate over each item in the array
        - if type is number and is odd, add to oddNumsArr
    -   once inputArr has been iterated over, sort oddNumsArr
    -   return sorted oddNumsArr
*/

// const sortOddNums = (inputArr) => {
//     const oddNumsArr = []

//     for (let i = 0; i < inputArr.length; i++) {
//         if (typeof inputArr[i] === "number" && inputArr[i] % 2 !== 0) {
//             oddNumsArr.push(inputArr[i])
//         }
//     }

//     return oddNumsArr.sort((a, b) => a - b)
// }

/* Green Test Successfully Ran
    PASS  ./code-challenges.test.js
    fibonacciIt
        ✓ Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided (2 ms)
    sortOddNums
        ✓ Take in an array containing any datatype and returns a new array of the odd numbers, sorted from least to greatest (1 ms)
*/

/* Refactor */

const sortOddNums = (inputArr) => {
    const oddNumsArr = inputArr.filter(item => typeof item === "number" && item % 2 !== 0).sort((a, b) => a - b)
    return oddNumsArr
}

// --------------------------------- Question 3 --------------------------------- //
// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("addItUp", () => {
    it("Takes in an array of numbers and returns an array of the accumulated sum", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        expect(addItUp(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addItUp(numbersToAdd2)).toEqual([0, 7, -1, 11])
    }),
        it("Should return an empty array if an empty array is provided", () => {
            const numbersToAdd3 = []
            expect(addItUp(numbersToAdd3)).toEqual([])
        })
})

/* Red Test Failed Successfully
   FAIL  ./code-challenges.test.js
   fibonacciIt
       ✓ Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided (2 ms)
   sortOddNums
       ✓ Take in an array containing any datatype and returns a new array of the odd numbers, sorted from least to greatest (1 ms)
   addItUp
       ✕ Takes in an array of numbers and returns an array of the accumulated sum (1 ms)
       ✕ Should return an empty array if an empty array is provided (1 ms)
   ReferenceError: addItUp is not defined
*/

// b) Create the function that makes the test pass.

/* Pseudo Code: addItUp
Function Name: addItUp
Parameters: 1, array of numbers (named numsArr)
Logic:
    - create new array named newArr
    - if numsArr is an empty array, return empty arr
    - if numsArr is not empty add first item to zero, push to array
    - add first item to second item, then push to array,
    - continue adding  incrementing  array items until newArr length is the same as numsArr length
    - return newArr
*/

// const addItUp = (numsArr) => {
//     const newArr = []
//     if (numsArr.length === 0) {
//         return newArr
//     }
//     newArr.push(numsArr[0])
//     for (let i = 0; i < numsArr.length - 1; i++) {
//         newArr.push(newArr[i] + numsArr[i + 1])
//     }
//     return newArr
// }

/* Green Test Passed Successfully
    PASS  ./code-challenges.test.js`
    fibonacciIt
        ✓ Takes in a number greater than two and returns an array that contains the numbers of the fibonacci sequence upto the length provided (3 ms)
    sortOddNums
        ✓ Take in an array containing any datatype and returns a new array of the odd numbers, sorted from least to greatest (1 ms)
    addItUp
        ✓ Takes in an array of numbers and returns an array of the accumulated sum (4 ms)
        ✓ Should return an empty array if an empty array is provided` 

*/

/* Refactor */

const addItUp = numsArr => {
    const newArr = []
    !numsArr ? numsArr : newArr.push(numsArr[0])

    for (let i = 0; i < numsArr.length - 1; i++) {
        newArr.push(newArr[i] + numsArr[i + 1])
    }
    return newArr
}