//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findKRotation(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for JavaScript

class Solution {
    findKRotation(arr) {
        let left = 0;
        let right = arr.length - 1;
        let maxIndex = 0;
        let mid = null;

        while (left <= right) {
            mid = Math.floor(left + (right - left) / 2);

            // Check if the left half is sorted
            if (arr[left] <= arr[mid]) {
                maxIndex = (arr[maxIndex] < arr[mid]) ? mid : maxIndex;
                left = mid + 1;
            } 
            // Otherwise, search in the right half
            else {
                maxIndex = (arr[maxIndex] < arr[right]) ? right : maxIndex;
                right = mid - 1;
            }
        }

        // If the array is not rotated
        if (arr[arr.length - 1] === arr[maxIndex]) return 0;

        // Return the number of rotations
        return maxIndex + 1;
    }
}
