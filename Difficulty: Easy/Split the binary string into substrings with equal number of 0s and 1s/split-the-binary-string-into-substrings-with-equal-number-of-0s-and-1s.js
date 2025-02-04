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
        let str = readLine();
        let obj = new Solution();
        console.log(obj.maxSubStr(str));
        
    
console.log("~");
}
}
// } Driver Code Ends


class Solution {
    // Function to find the length of the longest substring without repeating characters.
    maxSubStr(str) {
        // If the total length is odd, it cannot be split equally
        if (str.length % 2 !== 0) {
            return -1;
        }

        // Count occurrences of 0 and 1
        let count_0 = str.split("0").length - 1;
        let count_1 = str.split("1").length - 1;

        // If the count of 0s and 1s are not equal, return -1
        if (count_0 !== count_1) {
            return -1;
        }

        let ans = 0;
        let zeroCount = 0, oneCount = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "0") {
                zeroCount++;
            } else {
                oneCount++;
            }

            // When equal number of 0s and 1s are found, a valid substring is found
            if (zeroCount === oneCount) {
                ans++;
            }
        }

        return ans === 0 ? -1 : ans;
    }
}
