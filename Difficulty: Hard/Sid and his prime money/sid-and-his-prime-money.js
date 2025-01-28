//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.primeMoney(arr);
        console.log(ans[0] + " " + ans[1]);
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {

    // Function to find the longest increasing subsequence and
    // the sum of prime numbers in that subsequence.
    primeMoney(arr) {

        // Optimized Sieve of Eratosthenes to mark primes up to 'max'
        function sieveOfEratosthenes(max) {
            const isPrime = Array(max + 1).fill(true);
            isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes

            for (let i = 2; i * i <= max; i++) {
                if (isPrime[i]) {
                    for (let j = i * i; j <= max; j += i) {
                        isPrime[j] = false;
                    }
                }
            }
            return isPrime;
        }

        // Function to find the longest increasing subsequence with prime sums
        function findLongestIncreasingPrimeSum(arr) {
            const n = arr.length;
            const maxVal = Math.max(...arr); // Maximum value in the array for sieve
            const isPrime = sieveOfEratosthenes(maxVal); // Prime number lookup table

            let maxLength = 0; // Tracks the longest subsequence length
            let maxPrimeSum = 0; // Tracks the sum of primes in that subsequence

            let currentLength = 1; // Length of the current increasing subsequence
            let currentPrimeSum = isPrime[arr[0]] ? arr[0] : 0; // Prime sum of the current subsequence

            for (let i = 1; i < n; i++) {
                if (arr[i] > arr[i - 1]) {
                    // Continue the subsequence if current element is greater than previous
                    currentLength++;
                    if (isPrime[arr[i]]) currentPrimeSum += arr[i]; // Add prime number to sum
                } else {
                    // Update if the current subsequence is the best found so far
                    if (
                        currentLength > maxLength ||
                        (currentLength === maxLength && currentPrimeSum > maxPrimeSum)
                    ) {
                        maxLength = currentLength;
                        maxPrimeSum = currentPrimeSum;
                    }

                    // Reset for the next subsequence
                    currentLength = 1;
                    currentPrimeSum = isPrime[arr[i]] ? arr[i] : 0;
                }
            }

            // Final check for the last subsequence
            if (
                currentLength > maxLength ||
                (currentLength === maxLength && currentPrimeSum > maxPrimeSum)
            ) {
                maxLength = currentLength;
                maxPrimeSum = currentPrimeSum;
            }

            return [maxLength, maxPrimeSum];
        }

        return findLongestIncreasingPrimeSum(arr);
    }
}
