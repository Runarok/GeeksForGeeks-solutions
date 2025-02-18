//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.isPerfect(arr) ? "true" : "false");
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
    // Function to check if the array follows a specific pattern
    // First increases, then may remain constant, and then decreases.
    isPerfect(arr) {
        let phase = 'Increase';  // Start by checking for increasing phase

        // Loop through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {

            if (phase == 'Increase') {
                // Continue if the previous element is smaller (increasing phase)
                if (arr[i - 1] < arr[i]) {
                    continue;
                } else if (arr[i - 1] == arr[i]) {
                    // Transition to 'constant' if equal elements are found
                    phase = "constant";
                } else {
                    // If the current element is smaller, return false (violates increase phase)
                    return false;
                }
            } else if (phase == "constant") {
                // Continue if elements remain constant
                if (arr[i] == arr[i - 1]) {
                    continue;
                } else if (arr[i] < arr[i - 1]) {
                    // Transition to 'decrease' phase if current element is smaller
                    phase = "decrease";
                } else {
                    // If the element is greater than previous during the constant phase, return false
                    return false;
                }
            } else if (phase == "decrease") {
                // Continue checking if the array decreases
                if (arr[i] < arr[i - 1]) {
                    continue;
                } else {
                    // If the element is not smaller than previous, return false (violates decrease phase)
                    return false;
                }
            }
        }
        // Return true if the pattern holds (increasing, constant, and decreasing)
        return true;
    }
}
