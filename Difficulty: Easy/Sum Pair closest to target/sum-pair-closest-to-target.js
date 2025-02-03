//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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
        let target = parseInt(readLine());

        let ob = new Solution();
        let ans = ob.sumClosest(arr, target);
        if (ans.length === 0) {
            console.log("[]");
        } else {
            console.log(ans.join(" "));
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    sumClosest(arr, target) {
        // Sorting the array to use the two-pointer approach
        arr.sort((a, b) => a - b);
        let closestPair = [];
        let closestDiff = Infinity;
        
        // Initialize pointers at the start and end of the array
        let left = 0, right = arr.length - 1;
        
        // Iterate through the array to find the pair with the closest sum to the target
        while (left < right) {
            let currentSum = arr[left] + arr[right];
            let currentDiff = Math.abs(target - currentSum);
            
            // Update the closest pair if the current difference is smaller
            if (currentDiff < closestDiff) {
                closestDiff = currentDiff;
                closestPair = [arr[left], arr[right]];
            }
            
            // Adjust the pointers based on the sum
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If exact match is found, return the pair
                return closestPair;
            }
        }
        
        return closestPair;
    }
}
