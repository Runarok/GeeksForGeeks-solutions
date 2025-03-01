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
        obj.printPrimeFactorization(n);
    
console.log("~");
}
}

// } Driver Code Ends

// Back-end complete function Template for javascript

class Solution {
    // Function to check if a number is prime
    isPrime(n) {
        // A prime number is greater than 1 and divisible only by 1 and itself
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;  // If divisible by any number, it's not prime
            }
        }
        return true;  // Return true if the number is prime
    }
    
    // Function to print the prime factorization of a number
    printPrimeFactorization(n) {
        let ans = "";  // Initialize an empty string to store the result
        
        // Iterate through all numbers from 2 to n
        for (let i = 2; i <= n; i++) {
            // Check if the number is prime
            if (this.isPrime(i)) {
                let x = i;
                // Check if i is a factor of n, and keep dividing n by i
                while (n % x == 0) {
                    // Add the prime factor to the result string
                    if (ans.length > 0) ans += " ";  // Add a space between factors
                    ans += i.toString();  // Add the prime factor to the result string
                    x *= i;  // Multiply x by i to continue the factorization
                }
            }
        }
        
        // Print the prime factorization result
        console.log(ans);
    }
}
