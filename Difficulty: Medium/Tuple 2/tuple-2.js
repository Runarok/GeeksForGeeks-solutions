//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printArray(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let inputLine = readLine().split(' ').map(x => parseInt(x));

        let numbers = new Array(inputLine.length);
        for (let i = 0; i < inputLine.length; i++) {
            numbers[i] = inputLine[i];
        }

        let obj = new Solution();
        let res = obj.sequence(numbers);
        printArray(res, res.length);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} tup
 * @returns {Array}
 */

class Solution {
    // Function to return the tuple containing whole sequences.
    sequence(tup) {
        // Find the common difference of the arithmetic progression
        let commonDifference = tup[1] - tup[0];
        
        // Create a copy of the array to modify it easily
        let result = [...tup];
        
        // Calculate the next three numbers and append them
        for (let i = 0; i < 3; i++) {
            let nextNumber = result[result.length - 1] + commonDifference;
            result.push(nextNumber);
        }
        
        // Return the result as an array (similar to a tuple in JavaScript)
        return result;
    }
}
