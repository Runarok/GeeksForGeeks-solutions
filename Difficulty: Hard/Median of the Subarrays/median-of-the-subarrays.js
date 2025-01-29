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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let inputArr = readLine().split(' ').map(x=>parseInt(x));
        let N = inputArr[0];
        let M = inputArr[1];
        let A = new Array(N);
        inputArr = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = inputArr[i];
        let obj = new Solution();
        let res = obj.countSubarray(N, A, M);
        console.log(res);
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} A
 * @param {number} M
 * @returns {number}
*/

class Solution {
    countSubarray(n, nums, k) {
        const ajay = (n, nums, k) => {
            let d = { 0: 1 };
            let ans = 0;
            let cur = 0;
            let sum = 0;

            for (let i = 0; i < n; i++) {
                if (nums[i] < k) {
                    sum--;
                    if (sum in d) {
                        cur -= d[sum];
                    }
                } else {
                    if (sum in d) {
                        cur += d[sum];
                    }
                    sum++;
                }

                ans += cur;

                if (sum in d) {
                    d[sum]++;
                } else {
                    d[sum] = 1;
                }
            }

            return ans;
        };

        return ajay(n, nums, k) - ajay(n, nums, k + 1);
    }
}
