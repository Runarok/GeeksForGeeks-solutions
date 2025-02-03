//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let arr = new Array(n);
        let input_ar1 = readLine().split(" ").map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        
        let obj = new Solution();
        let res = obj.countDistinctSubarray(n, arr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
     * @param number n
     * @param number[] arr
     * @returns number
     */
    countDistinctSubarray(n, arr) {
        // Step 1: Find the total number of distinct elements in the original array
        let distinctCount = new Set(arr).size;
        
        // Step 2: Function to count subarrays with exactly 'k' distinct elements
        const countSubarraysWithAtMostKDistinct = (k) => {
            let freq = new Map();
            let start = 0;
            let count = 0;

            for (let end = 0; end < n; end++) {
                // Expand the window by adding arr[end]
                freq.set(arr[end], (freq.get(arr[end]) || 0) + 1);

                // If the number of distinct elements exceeds 'k', shrink the window
                while (freq.size > k) {
                    freq.set(arr[start], freq.get(arr[start]) - 1);
                    if (freq.get(arr[start]) === 0) {
                        freq.delete(arr[start]);
                    }
                    start++;
                }

                // The number of subarrays ending at 'end' with at most 'k' distinct elements
                count += (end - start + 1);
            }
            return count;
        };

        // Step 3: The number of subarrays with exactly 'd' distinct elements
        // is the difference between the subarrays with at most 'd' distinct elements
        // and those with at most 'd-1' distinct elements
        return countSubarraysWithAtMostKDistinct(distinctCount) - countSubarraysWithAtMostKDistinct(distinctCount - 1);
    }
}
