//{ Driver Code Starts
function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        console.log(obj.atMostK(arr, k));
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
    // Function to count the number of subarrays with at most 'k' distinct elements
    atMostK(arr, k) {
        // Get the length of the array
        let n = arr.length;
        
        // Initialize the result variable to 0
        let res = 0;
        
        // Initialize left and right pointers for the sliding window
        let left = 0, right = 0;
        
        // Map to keep track of the frequency of elements in the current window
        let freq = new Map();
        
        // Traverse the array using the right pointer
        while (right < n) {
            // Add the current element to the frequency map
            freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);
            
            // If this is the first time the element is added, decrease k
            if (freq.get(arr[right]) === 1) k -= 1;
            
            // If there are more than 'k' distinct elements, shrink the window from the left
            while (k < 0) {
                // Decrease the frequency of the leftmost element
                freq.set(arr[left], freq.get(arr[left]) - 1);
                
                // If the frequency of the element becomes 0, increase k
                if (freq.get(arr[left]) === 0) k += 1;
                
                // Move the left pointer to shrink the window
                left += 1;
            }
            
            // Add the number of subarrays ending at 'right' to the result
            res += (right - left + 1);
            
            // Move the right pointer to extend the window
            right += 1;
        }
        
        // Return the total count of subarrays
        return res;
    }
}
