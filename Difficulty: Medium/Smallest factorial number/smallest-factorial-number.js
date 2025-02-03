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
        let obj = new Solution();
        let res = obj.findNum(n);
        if(res === -0){
            res = 0;
        }
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {
    // Function to count the number of trailing zeros in the factorial of x
    countTrailingzeros(x) {
        let count = 0;
        while (x >= 5) {  // Keep dividing x by 5 to count the factors of 5
            x = Math.floor(x / 5);
            count += x;
        }
        return count;  // Return the total number of trailing zeros
    }

    // Function to find the smallest number whose factorial has at least N trailing zeros
    findNum(N) {
        // If N is 0, return 0 since 0! has 0 trailing zeros
        if (N === 0) return 0;
        
        let left = 0, right = 5 * N, ans = 0;
        
        // Binary search to find the smallest number whose factorial has at least N trailing zeros
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);  // Middle value to check
            let zeros = this.countTrailingzeros(mid);  // Count the trailing zeros in mid factorial
            
            // If mid factorial has at least N trailing zeros, update the answer and search in the left half
            if (zeros >= N) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;  // Otherwise, search in the right half
            }
        }
        return ans;  // Return the answer
    }
}
