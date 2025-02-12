//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input1 = readLine().split(' ').map(x => parseInt(x));
        let n = input1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input1[i];
        }
        let obj = new Solution();
        let res = obj.findSplit(arr);
        if (res[0] === -1 && res[1] === -1 || res.length != 2)
            console.log("false");
        else {
            let sum1 = 0, sum2 = 0, sum3 = 0;
            for (let i = 0; i < arr.length; i++) {
                if (i <= res[0]) {
                    sum1 += arr[i];
                } else if (i <= res[1]) {
                    sum2 += arr[i];
                } else {
                    sum3 += arr[i];
                }
            }

            if (sum1 === sum2 && sum2 === sum3) {
                console.log("true");
            } else {
                console.log("false");
            }
        }
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for Javascript
/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {
    findSplit(arr) {
        // Calculate the total sum of all elements in the array
        let totalSum = 0;
        for (let num of arr) {
            totalSum += num;
        }
        
        // If the total sum is not divisible by 3, return [-1, -1]
        if (totalSum % 3 !== 0) {
            return [-1, -1];
        }
        
        let targetSum = totalSum / 3;  // The sum that each of the three parts should have
        let currentSum = 0;
        let firstIndex = -1, secondIndex = -1;
        let n = arr.length;
        
        // Traverse the array to find the first and second split points
        for (let i = 0; i < n; i++) {
            currentSum += arr[i];
            
            // Mark the first index where the sum equals targetSum
            if (currentSum === targetSum && firstIndex === -1) {
                firstIndex = i;
            }
            
            // Mark the second index where the sum equals 2 * targetSum
            if (currentSum === 2 * targetSum && firstIndex !== -1) {
                secondIndex = i;
                break;
            }
        }
        
        // If both split points are found, check if the remaining part has the correct sum
        if (firstIndex !== -1 && secondIndex !== -1) {
            let lastPartSum = 0;
            for (let i = secondIndex + 1; i < n; i++) {
                lastPartSum += arr[i];
            }
            if (lastPartSum === targetSum) {
                return [firstIndex, secondIndex];
            }
        }
        
        // If no valid split is found, return [-1, -1]
        return [-1, -1];
    }
}
