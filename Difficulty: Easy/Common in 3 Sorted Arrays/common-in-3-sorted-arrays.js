//{ Driver Code Starts
// Initial Template for javascript

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
        const arr = readLine().split(' ').map(x => parseInt(x));
        const brr = readLine().split(' ').map(x => parseInt(x));
        const crr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.commonElements(arr, brr, crr);

        if (res.length === 0)
            console.log(-1);
        else
            console.log(res.join(' '));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        // Initialize pointers for each array
        let i = 0, j = 0, k = 0;
        // Array to store common elements
        let result = [];
        // Set to track already added elements to avoid duplicates
        let resultSet = new Set();

        // Iterate through all three arrays as long as we haven't reached the end of any array
        while (i < arr1.length && j < arr2.length && k < arr3.length) {
            // If the current element in arr1 is smaller than those in arr2 or arr3, move the pointer in arr1
            if (arr1[i] < arr2[j] || arr1[i] < arr3[k]) {
                i++;
            }
            // If the current element in arr2 is smaller than those in arr1 or arr3, move the pointer in arr2
            else if (arr2[j] < arr1[i] || arr2[j] < arr3[k]) {
                j++;
            }
            // If the current element in arr3 is smaller than those in arr1 or arr2, move the pointer in arr3
            else if (arr3[k] < arr1[i] || arr3[k] < arr2[j]) {
                k++;
            }
            // If elements in all three arrays are equal, we add it to the result
            else {
                // Only add the element if it hasn't been added already
                if (!resultSet.has(arr1[i])) {
                    result.push(arr1[i]);
                    resultSet.add(arr1[i]);
                }
                // Move the pointers for all three arrays
                i++;
                j++;
                k++;
            }
        }

        // Return the result array, or an empty array if no common elements were found
        return result.length > 0 ? result : [];
    }
}
