//{ Driver Code Starts
function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        console.log(obj.exactlyK(arr, k));
        console.log("~");
    }
}

// Example usage of the inputjs() function format
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
// } Driver Code Ends

class Solution {
    exactlyK(arr, k) {
        /**
         * Helper function to count the number of subarrays with at most 'k' distinct elements.
         * @param {number[]} arr - The input array.
         * @param {number} k - The maximum number of distinct elements allowed.
         * @returns {number} - The count of subarrays with at most 'k' distinct elements.
         */
        let countSubarraysWithAtMostKDistinct = (arr, k) => {
            let left = 0; // Left pointer of the sliding window
            let count = 0; // Stores the total count of valid subarrays
            let frequencyMap = new Map(); // Map to track the frequency of elements in the window
            
            for (let right = 0; right < arr.length; right++) {
                // Add the current element to the frequency map
                frequencyMap.set(arr[right], (frequencyMap.get(arr[right]) || 0) + 1);
                
                // If the number of distinct elements exceeds 'k', shrink the window from the left
                while (frequencyMap.size > k) {
                    frequencyMap.set(arr[left], frequencyMap.get(arr[left]) - 1);
                    
                    // If the frequency of an element becomes zero, remove it from the map
                    if (frequencyMap.get(arr[left]) === 0) {
                        frequencyMap.delete(arr[left]);
                    }
                    left++; // Move the left pointer to reduce distinct elements
                }

                // Count all valid subarrays ending at 'right'
                count += right - left + 1;
            }
            return count;
        }
        
        // The number of subarrays with exactly 'k' distinct elements is equal to:
        // (Subarrays with at most 'k' distinct elements) - (Subarrays with at most 'k-1' distinct elements)
        return countSubarraysWithAtMostKDistinct(arr, k) - countSubarraysWithAtMostKDistinct(arr, k - 1);
    }
}
