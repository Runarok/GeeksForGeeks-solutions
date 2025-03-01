//{ Driver Code Starts
// Initial Template for JavaScript

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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let result = obj.getSubArrays(arr);

        // Create the formatted output string
        let output = "[";
        for (let i = 0; i < result.length; i++) {
            let subarray = result[i];
            output += "[";
            for (let j = 0; j < subarray.length; j++) {
                output += subarray[j];
                if (j !== subarray.length - 1) {
                    output += ",";
                }
            }
            output += "]";
            if (i !== result.length - 1) {
                output += ", ";
            }
        }
        output += "]";

        console.log(output);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    getSubArrays(arr) {
        // Helper function to recursively generate subarrays
        const generateSubarrays = (array, result) => {
            // Push the first element as a subarray
            result.push([array[0]]);
            
            // Base case: if only one element is left, return result
            if (array.length === 1) return result;
            
            // Generate subarrays starting from index 0 to current index
            for (let i = 1; i < array.length; i++) {
                let subArray = [];
                for (let j = 0; j <= i; j++) {
                    subArray.push(array[j]);
                }
                result.push(subArray);
            }
            
            // Recursively process the rest of the array (excluding the first element)
            return generateSubarrays(array.slice(1), result);
        };
        
        // Start recursion with empty result array
        return generateSubarrays(arr, []);
    }
}
