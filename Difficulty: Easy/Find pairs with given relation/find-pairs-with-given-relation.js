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
        let ans = ob.findPairs(arr);
        console.log(ans);
        // console.log(ans.join(' '));
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    findPairs(arr) {
        // A Map to store the products and pairs that yield those products
        let productMap = new Map();
        
        // Iterate through all pairs (i, j) where i < j
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let product = arr[i] * arr[j];  // Product of the current pair
                
                // Check if this product already exists in the map
                if (productMap.has(product)) {
                    // Get the previously stored pair that generated the same product
                    let pairs = productMap.get(product);
                    for (let pair of pairs) {
                        // Check if the current pair (i, j) is distinct from the previous pair (a, b)
                        // This ensures all elements are distinct
                        if (pair[0] !== i && pair[0] !== j && pair[1] !== i && pair[1] !== j) {
                            return 1;  // Found distinct pairs with the same product
                        }
                    }
                }
                
                // Store the product and the current pair in the map
                if (!productMap.has(product)) {
                    productMap.set(product, []);
                }
                productMap.get(product).push([i, j]);
            }
        }
        
        return -1;  // No such pairs found
    }
}
