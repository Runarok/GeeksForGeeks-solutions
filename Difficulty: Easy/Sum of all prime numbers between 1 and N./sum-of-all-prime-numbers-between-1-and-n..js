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
        let res = obj.prime_Sum(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {  
    prime_Sum(n) {  
        // Handle edge cases  
        if (n < 2) return 0;  

        // Step 1: Create an array to track prime numbers  
        let primeTracker = Array(n + 1).fill(true);  
        primeTracker[0] = primeTracker[1] = false; // 0 and 1 are not prime  

        // Step 2: Mark non-prime numbers using the Sieve of Eratosthenes  
        for (let num = 2; num * num <= n; num++) {  
            if (primeTracker[num]) {  
                for (let multiple = num * num; multiple <= n; multiple += num) {  
                    primeTracker[multiple] = false; // Mark multiples of `num` as non-prime  
                }  
            }  
        }  

        // Step 3: Sum up all prime numbers  
        let totalSum = 0;  
        for (let index = 2; index <= n; index++) {  
            if (primeTracker[index]) {  
                totalSum += index;  
            }  
        }  

        return totalSum;  
    }  
}  
