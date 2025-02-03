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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let ans = obj.findDuplicate(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {

    findDuplicate(arr) {
       let map = {};
       
       for(let i = 0; i < arr.length; i++){
           if(!map[arr[i]]){
               map[arr[i]] = 1;
           }else{
               return arr[i];
           }
       }
    }
}