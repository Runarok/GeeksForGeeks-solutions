//{ Driver Code Starts
// Initial Template for JavaScript
// Position this line where user code will be pasted.
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr1 = readLine().split(' ').map(Number);
        const arr2 = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.minSum(arr1, arr2));
        console.log("~");
    }
}

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

// } Driver Code Ends

class Solution {
    minSum(arr1, arr2) {
        let sum1 = 0;
        let index1 = 0;
        let minArr1_1 = arr1[0]; // Smallest element in arr1
        let minArr2_1 = arr2[0]; // Smallest element in arr2

        // Find the minimum element in arr1 and its index
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] < minArr1_1) {
                minArr1_1 = arr1[i];
                index1 = i;
            }
        } 

        // Find the minimum element in arr2 excluding the same index as arr1's minimum
        for (let j = 0; j < arr2.length; j++) {
            if (j === index1) continue; // Skip the index of the minimum element in arr1
            if (arr2[j] < minArr2_1) {
                minArr2_1 = arr2[j];  
            }  
        } 
        
        sum1 = minArr1_1 + minArr2_1; // First possible minimum sum

        let sum2 = 0;
        let index2 = 0;
        let minArr1_2 = arr1[0]; // Another smallest element in arr1
        let minArr2_2 = arr2[0]; // Another smallest element in arr2

        // Find the minimum element in arr2 and its index
        for (let m = 0; m < arr2.length; m++) {
            if (arr2[m] < minArr2_2) {
                minArr2_2 = arr2[m];
                index2 = m;
            }
        } 

        // Find the minimum element in arr1 excluding the same index as arr2's minimum
        for (let n = 0; n < arr1.length; n++) {
            if (n === index2) continue; // Skip the index of the minimum element in arr2
            if (arr1[n] < minArr1_2) {
                minArr1_2 = arr1[n];
            }  
        }   

        sum2 = minArr1_2 + minArr2_2; // Second possible minimum sum

        return Math.min(sum1, sum2); // Return the smaller of the two sums
    }
}
