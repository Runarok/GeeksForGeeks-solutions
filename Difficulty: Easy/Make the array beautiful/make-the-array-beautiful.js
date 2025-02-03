//{ Driver Code Starts
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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.makeBeautiful(arr);
        let s = "";
        for(let it of res)
            s+=it+" ";
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

/**
 * Function to make an array beautiful by removing adjacent elements with different signs
 * @param {number[]} arr - The input array to be modified
 * @return {number[]} - The modified beautiful array
 */
class Solution {
    makeBeautiful(arr) {
        let stack = [];
        
        // Loop through each element in the array
        for (let num of arr) {
            // If the stack is not empty and the last element of the stack has opposite sign to current element
            if (stack.length > 0 && ((stack[stack.length - 1] >= 0 && num < 0) || (stack[stack.length - 1] < 0 && num >= 0))) {
                stack.pop();  // Pop the element with opposite sign from the stack
            } else {
                stack.push(num);  // Otherwise, push the current element onto the stack
            }
        }

        return stack;  // Return the modified stack (which is the beautiful array)
    }
}
