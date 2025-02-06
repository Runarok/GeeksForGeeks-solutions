//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
process.stdin.resume();
process.stdin.setEncoding('utf-8');

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
        let arr1 = readLine().split(' ').map(x => parseInt(x));
        let arr2 = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.isIdentical(arr1, arr2);
        console.log(ans ? 'true' : 'false');
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Compares two arrays to check if they are identical in terms of element frequencies.
     * @param {number[]} a - The first array to compare.
     * @param {number[]} b - The second array to compare.
     * @returns {boolean} - Returns true if both arrays have identical elements with the same frequency, else false.
     */
    isIdentical(a, b) {
        // Create frequency maps to store the count of each element in both arrays
        const mapA = new Map();
        const mapB = new Map();

        // Fill mapA with the frequencies of elements from array 'a'
        for (let num of a) {
            mapA.set(num, (mapA.get(num) || 0) + 1);
        }

        // Fill mapB with the frequencies of elements from array 'b'
        for (let num of b) {
            mapB.set(num, (mapB.get(num) || 0) + 1);
        }

        // Compare the size of both maps
        if (mapA.size !== mapB.size) {
            return false;  // If they have different numbers of unique elements, they are not identical
        }

        // Compare the frequencies of each element between the two maps
        for (let [key, value] of mapA) {
            if (mapB.get(key) !== value) {
                return false;  // If the frequencies of any element don't match, arrays are not identical
            }
        }

        // If all checks pass, the arrays are identical
        return true;
    }
}
