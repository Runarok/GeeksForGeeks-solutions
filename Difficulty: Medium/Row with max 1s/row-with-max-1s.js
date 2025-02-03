//{ Driver Code Starts
// Input handling
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("", (t) => {
    let testCases = parseInt(t);
    let currentCase = 0;

    rl.on("line", (input) => {
        if (currentCase < testCases) {
            let mat = JSON.parse(input); // Convert input string to matrix
            let solution = new Solution();
            let result = solution.rowWithMax1s(mat); // Get row with maximum 1s

            console.log(result); // Output the result
            console.log("~");    // Output the result
            currentCase++;
            if (currentCase === testCases) {
                rl.close();
            }
        }
    });
});
// } Driver Code Ends


/**
 * @param number[][] arr
 * @returns number
 */

class Solution {
    rowWithMax1s(arr) {
       let rowLength = arr.length;  // Number of rows in the matrix
       let colLength = arr[0].length;  // Number of columns in the matrix
       
       let maxSum = 0;  // Variable to track the maximum sum of 1s
       let index = -1;  // Variable to store the index of the row with the max sum of 1s
       
       // Loop through each row
       for (let i = 0; i < rowLength; i++) {
           let sum = 0;  // Sum of 1s in the current row
           
           // Calculate the sum of 1s in the current row
           for (let j = 0; j < colLength; j++) {
               sum += arr[i][j];
           }
           
           // Update maxSum and index if a new max is found
           if (maxSum < sum) {
               maxSum = sum;
               index = i;
           }
       }
       
       // Return the index of the row with the maximum sum of 1s
       return index;
    }
}
