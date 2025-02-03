//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.totalElements(arr);
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} fruits
 * @returns {number}
 */

class Solution {
    totalElements(arr) {
        let countMap = {};
        let leftPointer = 0;
        let maxLength = 0;
        
        for (let rightPointer = 0; rightPointer < arr.length; rightPointer++) {
            
            countMap[arr[rightPointer]] = (countMap[arr[rightPointer]] || 0) + 1;
            
            // Shrink the window from the left if there are more than two distinct elements
            while (Object.keys(countMap).length > 2) {
                countMap[arr[leftPointer]]--;
                
                if (countMap[arr[leftPointer]] === 0) {
                    delete countMap[arr[leftPointer]];
                }
                
                leftPointer++;
            }
            
            // Update max length
            maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
        }
        
        return maxLength;
    }
}
