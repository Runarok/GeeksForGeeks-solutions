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
        let [num1,num2] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.solve(num1,num2);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    constructor() {
        // Generate prime numbers up to 9999 using the Sieve of Eratosthenes
        this.primes = new Array(10000).fill(1);
        this.primes[0] = this.primes[1] = 0; // 0 and 1 are not prime
        
        for (let p = 2; p * p < 10000; p++) {
            if (this.primes[p] === 1) {
                for (let i = p * p; i < 10000; i += p) {
                    this.primes[i] = 0;
                }
            }
        }
    }

    solve(num1, num2) {
        // If both numbers are the same, no transformation is needed
        if (num1 === num2) return 0;

        let visited = new Set(); // Track visited numbers to prevent cycles
        let queue = []; // Use an array as a queue for BFS
        queue.push(num1);
        visited.add(num1);
        let level = 0; // Track the number of transformations

        while (queue.length > 0) {
            let n = queue.length;
            for (let i = 0; i < n; i++) {
                let num = queue.shift();

                // If we reached the target number, return the number of transformations
                if (num === num2) {
                    return level;
                }

                // Try changing each digit of the number
                let numStr = num.toString();
                for (let j = 0; j < 4; j++) {
                    for (let digit = 0; digit < 10; digit++) {
                        // Prevent leading zero in the first position
                        if (j === 0 && digit === 0) continue;

                        // Form a new number by changing the j-th digit
                        let nextNum = numStr.substring(0, j) + digit + numStr.substring(j + 1);
                        nextNum = parseInt(nextNum, 10);

                        // If the new number is a prime and hasn't been visited, add it to the queue
                        if (this.primes[nextNum] && !visited.has(nextNum)) {
                            queue.push(nextNum);
                            visited.add(nextNum);
                        }
                    }
                }
            }
            level++; // Increment transformation count
        }

        return -1; // If transformation is not possible
    }
}
