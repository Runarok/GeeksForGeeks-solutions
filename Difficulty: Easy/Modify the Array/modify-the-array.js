//{ Driver Code Starts
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
        let ob = new Solution();
        let ans = ob.modifyAndRearrangeArr(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution 
{
    modifyAndRearrangeArr(arr)  // with a single "for" cycle:
    {
        let arrayLength = arr.length;
        let leftIndex = 0;           // To insert non-zero values and merged values
        let rightIndex = arrayLength - 1;  // To insert zeros at the end
        let resultArray = [];

        for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) 
        {
            // If the current element and the next element are the same and both non-zero, merge them
            if (currentIndex + 1 < arrayLength && arr[currentIndex] != 0 && arr[currentIndex] == arr[currentIndex + 1]) 
            {
                resultArray[leftIndex++] = 2 * arr[currentIndex];  // Store merged value to the left
                arr[currentIndex + 1] = 0;  // Set the next element to zero after merging
            }
            // If current element is non-zero, add to the left side of resultArray
            else if (arr[currentIndex] != 0) 
            {
                resultArray[leftIndex++] = arr[currentIndex];
            }
            // If current element is zero, add it to the right side of resultArray
            else 
            {
                resultArray[rightIndex--] = arr[currentIndex];
            }
        }
        return resultArray;  // Modified and rearranged array
    }
}
