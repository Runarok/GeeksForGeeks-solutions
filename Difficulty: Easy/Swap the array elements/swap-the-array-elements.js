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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.swapElements(arr);
        let S = "";
        for (let j = 0; j < arr.length; j++) {
            S += arr[j];
            S += " "
        }
        console.log(S);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number[]} arr - An array of numbers
     * @returns {void} - This function does not return anything, it modifies the array in-place.
     */
    swapElements(arr) {
        // Initialize index i to iterate over the array
        let i = 0;
        
        // Get the length of the array
        let n = arr.length;

        // Iterate through the array, swapping elements at positions i and i+2
        while (i + 2 < n) {
            // Swap arr[i] with arr[i+2]
            [arr[i], arr[i + 2]] = [arr[i + 2], arr[i]];

            // Increment the index by 1 to check the next set of elements
            i++;
        }
    }
}
