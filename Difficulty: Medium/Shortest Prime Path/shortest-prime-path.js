//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res, n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    let sol = new Solution();
    for (i = 0; i < t; i++) {
        let input1 = readLine().split(" ").map(x => parseInt(x));
        let Num1 = input1[0];
        let Num2 = input1[1];
        let res = sol.shortestPath(Num1, Num2);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @class Solution
 */
class Solution {
    /**
     * @constructor
     * Initializes a prime number lookup table using the Sieve of Eratosthenes.
     */
    constructor() {
        // Boolean array to mark prime numbers (1 means prime, 0 means not prime)
        this.prime = new Array(10001).fill(1);
        
        // 0 and 1 are not prime numbers
        this.prime[0] = this.prime[1] = false;

        // Apply Sieve of Eratosthenes to mark non-prime numbers
        for (let i = 2; i * i <= 10000; i++) {
            if (this.prime[i]) {
                for (let j = i * i; j <= 10000; j += i) {
                    this.prime[j] = false;
                }
            }
        }
    }
    
    /**
     * Checks if a given number is prime.
     * @param {number} n - The number to check.
     * @returns {boolean} - Returns true if the number is prime, otherwise false.
     */
    isPrime(n) {
        return this.prime[n];
    }

    /**
     * Finds the shortest path to convert one 4-digit prime number to another by changing one digit at a time.
     * @param {number} Num1 - The starting 4-digit prime number.
     * @param {number} Num2 - The target 4-digit prime number.
     * @returns {number} - The minimum number of steps to transform Num1 to Num2, or -1 if impossible.
     */
    shortestPath(Num1, Num2) {
        // If both numbers are already the same, no steps are required
        if (Num1 === Num2) {
            return 0;
        }

        // BFS queue, storing [current number, step count]
        const queue = [[Num1, 0]];
        const visited = new Set();
        visited.add(Num1);

        while (queue.length) {
            const [currentNum, steps] = queue.shift();

            // Iterate over each digit position (0 to 3)
            for (let i = 0; i < 4; i++) {
                const digits = String(currentNum).split('');

                // Try replacing the current digit with every number from 0 to 9
                for (let j = 0; j <= 9; j++) {
                    // Skip if the digit remains the same or if leading zero is created
                    if (j === Number(digits[i]) || (i === 0 && j === 0)) {
                        continue;
                    }

                    // Modify the current digit and form the new number
                    const newDigits = [...digits];
                    newDigits[i] = String(j);
                    const nextNum = Number(newDigits.join(''));

                    // If the target number is found, return the step count
                    if (nextNum === Num2) {
                        return steps + 1;
                    }

                    // Add the new prime number to the queue if not visited
                    if (this.isPrime(nextNum) && !visited.has(nextNum)) {
                        visited.add(nextNum);
                        queue.push([nextNum, steps + 1]);
                    }
                }
            }
        }

        // Return -1 if there is no valid path to transform Num1 to Num2
        return -1;
    }
}
