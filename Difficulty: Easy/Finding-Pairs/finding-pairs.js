//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine().trim()); // Number of test cases

    for (let i = 0; i < t; i++) {
        let nums = readLine().trim().split(" ").join(
            ""); // Read and process the line of characters
        let num_count = nums.length;

        if (num_count % 2 !== 0) {
            console.log(nums.split('').join(':') + ":Incorrect input format");
            continue;
        }

        let arr = [];
        for (let j = 0; j < num_count; j += 2) {
            arr.push([ nums[j], nums[j + 1] ]);
        }

        let s = readLine().trim(); // Read the string of characters

        let obj = new Solution();
        let result = obj.count_pairs(arr, s);
        console.log(result);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to count pairs of characters from array and string.
    count_pairs(arr, s) {
        let count = 0;
        
        // Iterate through each pair in the array
        for (let i = 0; i < arr.length; i++) {
            // Check if both characters in the pair are present in the string
            if (s.includes(arr[i][0]) && s.includes(arr[i][1])) {
                count++; // Increment count if both characters are found
            }
        }
        
        // Return the total count of pairs
        return count;
    }
}
