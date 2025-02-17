//{ Driver Code Starts
//Initial Template for javascript

//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let sizeOfArray = parseInt(readLine());
        let arr = new Array(sizeOfArray);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<sizeOfArray;i++)
            arr[i] = input_ar[i];
        let obj = new Solution();
        obj.maximumAdjacent(sizeOfArray, arr);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} sizeOfArray
 * @param {number[]} arr
 */
class Solution {
    // Function to find the maximum element for every adjacent pair in the array.
    maximumAdjacent(sizeOfArray, arr){
        const result = [];  // Array to store the maximum of each adjacent pair
        
        // Loop through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            // Push the maximum of the current element and the previous element to the result array
            result.push(Math.max(arr[i], arr[i - 1]));
        }
        
        // Join the result array into a string with spaces in between and log it
        console.log(result.join(" "));
    }
}
