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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let M = parseInt(input_line[0]);
        let N = parseInt(input_line[1]);
        let obj = new Solution();
        let ans = obj.primeRange(M, N);
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
 * @param {number} M
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
  // Function to print all primes in the range from M to N
  primeRange(M, N) {
    let requiredPrime = [];
    
    // Loop through all numbers in the range from M to N
    for (let i = M; i <= N; i++) {
      // Use "this.isPrime" to call the helper method inside the class
      if (this.isPrime(i)) { 
        requiredPrime.push(i);  // If prime, add it to the result array
      }
    }
    
    return requiredPrime;  // Return the list of prime numbers found
  }

  // Helper function to check if a number is prime
  isPrime(N) {
    if (N < 2) return false; // Numbers less than 2 are not prime
    
    // Check for divisibility up to the square root of N
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) return false; // If divisible by any number, it's not prime
    }
    
    return true; // If no divisors found, it's prime
  }
}
