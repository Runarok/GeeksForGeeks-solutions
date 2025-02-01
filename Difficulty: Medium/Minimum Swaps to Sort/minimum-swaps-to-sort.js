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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.minSwaps(arr);
        console.log(ans);
        // console.log(ans.join(' '));
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to find the minimum number of swaps required to sort the array.
    minSwaps(arr) {
        let result = 0;  // To store the total number of swaps
        const arrWithIndex = [];  // To hold the array elements along with their original indices
        const visited = [];  // To track visited elements during cycle detection
        
        // Populate arrWithIndex with elements and their indices
        for (let i = 0; i < arr.length; i++) {
            arrWithIndex.push({
                first: arr[i],   // Array element value
                second: i        // Original index
            });
            visited.push(false);  // Initialize all elements as not visited
        }
        
        // Sort the array based on the element values
        arrWithIndex.sort((a, b) => a.first - b.first);
        
        // Traverse through the array and calculate minimum swaps using cycle detection
        for (let i = 0; i < arr.length; i++) {
            const originalIndex = arrWithIndex[i].second;  // Get the original index of the current element
            if (visited[i] || i === originalIndex) {
                // If already visited or already in correct position, skip this element
                continue;
            }
            
            let node = i;
            let cycleSize = 0;  // To track the number of elements in the current cycle
            
            // Follow the cycle until we return to the starting point
            while (!visited[node]) {
                visited[node] = true;  // Mark the node as visited
                cycleSize++;  // Increment the cycle size
                node = arrWithIndex[node].second;  // Move to the next node in the cycle
            }
            
            // Add the number of swaps required for this cycle
            if (cycleSize > 1) {
                result += (cycleSize - 1);
            }
        }
        
        return result;  // Return the total number of swaps
    }
}
