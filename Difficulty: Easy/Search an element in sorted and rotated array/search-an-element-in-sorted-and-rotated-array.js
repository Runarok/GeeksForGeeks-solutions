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
        
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let k = parseInt(readLine()); 
        let obj = new Solution();
        let res = obj.Search(arr, k);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function template for JavaScript  

/**  
 * @param {number[]} array - The array to search in  
 * @param {number} target - The value to find  
 * @returns {number} - The index of the target value, or -1 if not found  
 */  
class Solution {  
    Search(array, target) {  
        // Use the built-in indexOf method to find the target in the array  
        return array.indexOf(target);  
    }  
}  
