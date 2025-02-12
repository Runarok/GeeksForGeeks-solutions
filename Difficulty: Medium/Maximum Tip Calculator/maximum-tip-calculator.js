//{ Driver Code Starts

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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let x = parseInt(readLine());

        let y = parseInt(readLine());

        let arr = new Array(n);
        let input_a = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_a[i];
        }

        let brr = new Array(n);
        let input_b = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            brr[i] = input_b[i];
        }

        let obj = new Solution();
        let res = obj.maxTip(n, x, y, arr, brr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * Function to maximize the total tip amount based on given conditions.
    * @param {number} n - Number of orders.
    * @param {number} x - Maximum number of orders A can handle.
    * @param {number} y - Maximum number of orders B can handle.
    * @param {number[]} arr - Tip amounts for A for each order.
    * @param {number[]} brr - Tip amounts for B for each order.
    * @returns {number} - Maximum total tip amount.
    */
    maxTip(n, x, y, arr, brr) {
        let tips = [], totalTip = 0;

        // Create an array of differences between A's and B's tips and their corresponding indices
        for (let i = 0; i < n; i++) {
            tips.push([Math.abs(arr[i] - brr[i]), i]);
        }

        // Sort the tips by the absolute difference in descending order
        tips.sort((a, b) => b[0] - a[0]);

        // Count how many orders A and B are assigned
        let aCount = 0, bCount = 0;
        
        // Iterate over the sorted tips and assign the orders
        for (let [_, i] of tips) {
            // If A has more capacity or B has already reached max capacity, assign the order to A
            if ((arr[i] >= brr[i] && aCount < x) || bCount >= y) {
                totalTip += arr[i];
                aCount++;
            } 
            // Otherwise, assign the order to B
            else {
                totalTip += brr[i];
                bCount++;
            }
        }

        return totalTip;  // Return the maximum total tip amount
    }
}
