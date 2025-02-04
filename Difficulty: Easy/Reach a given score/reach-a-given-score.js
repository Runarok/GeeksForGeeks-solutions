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
        let obj = new Solution();
        let res = obj.count(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends





// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    count(n) {
        // If n is less than 3, return 0 since it's not possible to form a valid combination
        if (n < 3)
            return 0;

        // Initialize memo array to store results for subproblems
        let memo = new Array(n + 1).fill(0);
        
        // Base case: there is 1 way to form a sum of 0 (i.e., by taking no numbers)
        memo[0] = 1;

        // Loop for 3, 5, and 10 to calculate the number of ways to form n
        // with multiples of 3
        for (let i = 3; i <= n; i++) {
            memo[i] += memo[i - 3];
        }

        // Calculate for multiples of 5
        for (let i = 5; i <= n; i++) {
            memo[i] += memo[i - 5];
        }

        // Calculate for multiples of 10
        for (let i = 10; i <= n; i++) {
            memo[i] += memo[i - 10];
        }

        // Return the number of ways to form n
        return memo[n];
    }
}
