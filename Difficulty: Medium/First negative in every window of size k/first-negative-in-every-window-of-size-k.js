//{ Driver Code Starts
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

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.FirstNegativeInteger(arr, k);

        console.log(res.join(' ')); // Print the array as a space-separated string
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    FirstNegativeInteger(arr, k) {
        let ans = [];
        let flag = false;

        // Check for negative integers in the first window
        for (let i = 0; i < k; i++) {
            if (arr[i] < 0) {
                ans.push(arr[i]);
                flag = true;
                break;
            }
        }

        if (!flag) {
            ans.push(0);
        }

        // Slide the window across the array
        let left = 1;
        let right = k;

        while (right < arr.length) {
            flag = false;

            // Check for negative integers in the current window
            for (let i = left; i <= right; i++) {
                if (arr[i] < 0) {
                    ans.push(arr[i]);
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                ans.push(0);
            }

            left++;
            right++;
        }

        return ans;
    }
}
