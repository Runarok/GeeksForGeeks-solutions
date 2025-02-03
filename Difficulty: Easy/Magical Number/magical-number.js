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
    let t = parseInt(readLine()); // Read the number of test cases

    for (let i = 0; i < t; i++) {
        // Read the array from input
        let arr = readLine().split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class and find the magical number
        let obj = new Solution();
        let res = obj.findMagicalNumber(arr);

        // Print the result
        console.log(res);
    }
}

// } Driver Code Ends


/**
* @param number[] arr

* @returns number
*/
class Solution {
    findMagicalNumber(arr) {
        // Iterate through the array to find the magical number
        for(let i = 0; i < arr.length; i++) {
            // If the element is equal to its index, return the index as the magical number
            if(arr[i] === i) {
                return i;
            }
        }
        
        // Return -1 if no magical number is found
        return -1;
    }
}
