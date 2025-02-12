//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.longestPerfectPiece(arr, N));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to find the longest perfect piece.
    longestPerfectPiece(arr, N) {
        let start = 0, maxLength = 0;
        const freqMap = new Map();

        // Iterate through the array with the 'end' pointer
        for (let end = 0; end < N; end++) {
            // Increment frequency of the current element
            freqMap.set(arr[end], (freqMap.get(arr[end]) || 0) + 1);

            // If the difference between max and min element frequency is more than 1, adjust the 'start' pointer
            while (Math.max(...Array.from(freqMap.keys())) - Math.min(...Array.from(freqMap.keys())) > 1) {
                freqMap.set(arr[start], freqMap.get(arr[start]) - 1);
                // If the frequency becomes 0, remove the element from the map
                if (freqMap.get(arr[start]) === 0) freqMap.delete(arr[start]);
                start++;
            }
            
            // Update the maxLength with the current valid subarray length
            maxLength = Math.max(maxLength, end - start + 1);
        }
        return maxLength;
    }
}
