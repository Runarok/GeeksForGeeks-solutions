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
        let ans = obj.findElement(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    findElement(arr) {
        // Code here
        
        let length = arr.length;

        // Array to store maximum element seen so far from the left side
        let leftMax = new Array(length);

        // Array to store minimum element seen so far from the right side
        let rightMin = new Array(length);

        // Initial value for leftMax: first element itself
        leftMax[0] = arr[0];

        // Initial value for rightMin: last element itself
        rightMin[length - 1] = arr[length - 1];

        // Fill leftMax array, leftMax[i] contains the maximum element from arr[0] to arr[i]
        for (let i = 1; i < length; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
        }

        // Fill rightMin array, rightMin[i] contains the minimum element from arr[i] to arr[length-1]
        for (let i = length - 2; i >= 0; i--) {
            rightMin[i] = Math.min(rightMin[i + 1], arr[i]);
        }

        // Iterate the array to find an element which satisfies the condition:
        // All elements on the left are smaller or equal, and all elements on the right are greater or equal
        for (let i = 1; i < length - 1; i++) {
            if (leftMax[i - 1] <= arr[i] && arr[i] <= rightMin[i + 1]) {
                return arr[i];
            }
        }

        // If no such element is found, return -1
        return -1;
    }
}
