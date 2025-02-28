//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.fizzBuzz(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n - The upper limit of numbers to process.
    * @returns {string[]} - Array containing FizzBuzz results from 1 to n.
    */
    fizzBuzz(n) {
        // Array to store the final result.
        let resultArray = [];
        
        // Loop through numbers from 1 to n.
        for (let number = 1; number <= n; number++) {
            // Check if the number is divisible by both 3 and 5.
            if (number % 3 === 0 && number % 5 === 0) {
                resultArray.push("FizzBuzz"); // Both divisible — FizzBuzz.
            } 
            // Check if the number is divisible only by 3.
            else if (number % 3 === 0) {
                resultArray.push("Fizz"); // Divisible by 3 — Fizz.
            } 
            // Check if the number is divisible only by 5.
            else if (number % 5 === 0) {
                resultArray.push("Buzz"); // Divisible by 5 — Buzz.
            } 
            // If the number is not divisible by 3 or 5, just add the number itself.
            else {
                resultArray.push(number.toString()); // Convert number to string and add.
            }
        }

        // Return the complete result array.
        return resultArray;
    }
}
