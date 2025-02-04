//{ Driver Code Starts
// Initial Template for javascript

// Driver code
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
        let q = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.countMultiples(arr, q);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

class Solution {
    
    /**
     * Counts the number of multiples of each element in q in the array arr.
     * 
     * @param {Array<number>} arr - The array of numbers
     * @param {Array<number>} q - The array of query divisors
     * @return {Array<number>} - An array of the count of multiples for each query
     */
    countMultiples(arr, q) {
        let ans = [];
        
        // Process each query divisor
        for (let i of q) {
            if (i === 0) {
                ans.push(0);  // No multiples for 0
                continue;
            }
            
            let count = 0;
            
            // Count multiples of i in arr
            for (let j of arr) {
                if (j !== 0 && j % i === 0) {
                    count++;
                }
            }
            
            ans.push(count);
        }
        
        return ans;
    }
}
