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
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let ans = obj.leafNodes(arr, N);
        let s = "";
        for(let i=0;i<ans.length;i++)
        {
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
 */

class Solution {
    leafNodes(arr, N) {
        let s = [];
        let leaves = [];

        for (let i = 0; i < N - 1; i++) {
            let found = false;

            // If the current element is greater than the next, push it to the stack
            if (arr[i] > arr[i + 1]) {
                s.push(arr[i]);
            } else {
                // Pop from the stack while the next element is greater than the top of the stack
                while (s.length && arr[i + 1] > s[s.length - 1]) {
                    s.pop();
                    found = true;
                }
            }

            // If we found a leaf node, add it to the leaves array
            if (found) {
                leaves.push(arr[i]);
            }
        }

        // Add the last element as a leaf node
        leaves.push(arr[N - 1]);

        return leaves;
    }
}
