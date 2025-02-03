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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let color = new Array(n);
        let radius = new Array(n);
        let a = readLine().split(" ").map(x=>parseInt(x));
        for(let j = 0;j<n;j++){
            color[j] = a[j];
        }
        a = readLine().split(" ").map(x=>parseInt(x));
        for(let j = 0;j<n;j++){
            radius[j] = a[j];
        }
        let obj = new Solution();
        let res = obj.finLength(n, color, radius);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} color
 * @param {number[]} radius
 * @returns {number}
*/

class Solution {
    finLength(N, color, radius) {
        let stack = [];

        for (let i = 0; i < N; i++) {
            // Check if the current pair of color and radius matches the top of the stack
            if (stack.length > 0 && stack[stack.length - 1][0] === color[i] && stack[stack.length - 1][1] === radius[i]) {
                stack.pop();  // Remove the top pair if they match
            } else {
                stack.push([color[i], radius[i]]);  // Add the current pair to the stack
            }
        }

        return stack.length;  // Return the length of the remaining stack
    }
}
