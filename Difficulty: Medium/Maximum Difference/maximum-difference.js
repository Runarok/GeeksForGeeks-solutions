//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());

    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.findMaxDiff(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    findMaxDiff(arr) {
        // Initialize arrays to store the nearest smaller elements
        let left = [];
        let right = [];
        
        // Calculate the nearest smaller elements to the right of each element
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            // Look for a smaller element to the right
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    count = arr[j];
                    break;
                }
            }
            right[right.length] = count;  // Add to right array
            count = 0;

            // Look for a smaller element to the left
            for (let j = i - 1; j >= 0; j--) {
                if (arr[i] > arr[j]) {
                    count = arr[j];
                    break;
                }
            }
            left[left.length] = count;  // Add to left array
        }

        let result = 0;
        // Calculate the maximum difference between left and right smaller elements
        for (let i = 0; i < arr.length; i++) {
            let diff = Math.abs(left[i] - right[i]);
            if (diff > result) {
                result = diff;  // Update the result with the largest difference
            }
        }
        
        return result;
    }
}
