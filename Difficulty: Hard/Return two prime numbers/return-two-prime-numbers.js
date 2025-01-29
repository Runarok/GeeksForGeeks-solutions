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
        let res = obj.primeDivision(n);
        printList(res,res.length);
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    primeDivision(N) {
        // Iterate through numbers up to N/2 to find two prime numbers
        for (let i = 2; i <= N / 2; i++) {
            if (isPrime(i) && isPrime(N - i)) {
                return [i, N - i]; // Return the pair of prime numbers
            }
        }

        // Helper function to check if a number is prime
        function isPrime(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;
            if (num % 2 === 0 || num % 3 === 0) return false;

            let i = 5;
            while (i * i <= num) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
                i += 6;
            }
            return true;
        }
    }
}


