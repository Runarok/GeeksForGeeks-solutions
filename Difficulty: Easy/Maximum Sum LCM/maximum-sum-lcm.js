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
        console.log(obj.maxSumLCM(n));
        
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    // Function to find the maximum sum such that no three are consecutive.
    maxSumLCM(n) {
        let max_sum = 0;
        let i = 1;
        // iterating until the square of i is less than or equal to n.
        while (i ** 2 <= n) {
            // if i is a divisor of n
            if (n % i === 0) {
                // adding i to the sum
                max_sum += i;
                // if i and n/i are different divisors of n,
                // then adding n/i to the sum
                if (n / i !== i) {
                    max_sum += n / i;
                }
            }
            // incrementing i by 1
            i++;
        }
        // returning the maximum sum obtained from LCM of divisors of n.
        return max_sum;
    }
}
