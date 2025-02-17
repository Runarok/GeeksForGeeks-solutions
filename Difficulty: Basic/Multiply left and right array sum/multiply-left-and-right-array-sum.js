//{ Driver Code Starts
class Main {
    static main() {
        const readline = require('readline');

        const rl =
            readline.createInterface({input : process.stdin, output : process.stdout});

        let inputs = [];

        rl.on('line', (line) => { inputs.push(line); });

        rl.on('close', () => {
            let testCases = parseInt(inputs[0]);
            let currentIndex = 1;

            for (let i = 0; i < testCases; i++) {
                const arr = inputs[currentIndex].split(' ').map(Number);
                const ob = new Solution();
                console.log(ob.multiply(arr));
                currentIndex++;
            }
        });
    }
}

Main.main();
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array of numbers.
 * @return {number} - The product of the sum of the first half and the sum of the second half of the array.
 */

class Solution {
    multiply(arr) {
        let sum1 = 0, sum2 = 0;
        const n = arr.length;

        // Sum the first half of the array
        for (let i = 0; i < Math.floor(n / 2); i++) {
            sum1 += arr[i];
        }

        // Sum the second half of the array
        for (let i = Math.floor(n / 2); i < n; i++) {
            sum2 += arr[i];
        }

        // Return the product of the two sums
        return sum1 * sum2;
    }
}
