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
        let ans = ob.smallestSubsegment(arr);
        // console.log(ans);
        console.log(ans.join(' '));
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {Object}
 */

class Solution {
    smallestSubsegment(arr) {
        let fmap = new Map(); // Store frequency of all the elements
        let simap = new Map(); // Store start index of all the elements
        let hf = 0; // Highest frequency encountered so far
        let end; // End index of the smallest subsegment
        let start; // Start index of the smallest subsegment
        let length; // Length of the current subsegment being considered
        let minLength; // Minimum length of subsegment with highest frequency
        let result = []; // Final result array to hold the subsegment
        
        // Iterate through the array to fill frequency and index maps
        for(let i = 0; i < arr.length; i++){
            // Update frequency map
            fmap.set(arr[i], (fmap.get(arr[i]) || 0) + 1);
            
            // Update start index map if element is encountered for the first time
            if(!simap.has(arr[i])){
                simap.set(arr[i], i);
            }
            
            // Check if the current frequency is the highest, update subsegment
            if(fmap.get(arr[i]) > hf){
                hf = fmap.get(arr[i]);
                end = i;
                start = simap.get(arr[i]);
                minLength = (end - start) + 1;
            }
            // If frequency is the same as the highest, check for smaller subsegment
            else if(fmap.get(arr[i]) == hf){
                length = (i - simap.get(arr[i])) + 1;
                if(length < minLength){
                    end = i;
                    start = simap.get(arr[i]);
                    minLength = length;
                }
            }
        }
        
        // Extract the smallest subsegment and store it in result array
        for(let i = start; i <= end; i++){
            result.push(arr[i]);
        }
        
        return result; // Return the result subsegment
    }
}
