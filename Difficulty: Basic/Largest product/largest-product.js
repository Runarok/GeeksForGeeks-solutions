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
        let k = parseInt(readLine());
        let ans = ob.findMaxProduct(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to find the maximum product of any subarray of size k
    findMaxProduct(arr, k) {
        // Initialize the product of the first k elements
        let prod = 1;
        
        // Initialize the max product as 1
        let max = 1;
        
        // Calculate the product of the first k elements
        for (let i = 0; i < k; i++) {
            prod *= arr[i];
        }
        
        // Set the initial max product to be the product of the first k elements
        max = prod;
        
        // Loop through the array starting from the (k+1)-th element
        for (let i = k; i < arr.length; i++) {
            // Update the product by dividing by the element that is no longer in the window 
            // and multiplying by the new element in the window
            prod = prod * arr[i] / arr[i - k];
            
            // If the new product is greater than the current max, update the max
            if (prod > max)
                max = prod;
        }
        
        // Return the maximum product found
        return max;
    }
}
