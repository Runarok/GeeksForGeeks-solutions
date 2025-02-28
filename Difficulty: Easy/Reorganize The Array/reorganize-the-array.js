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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.rearrange(arr);
        console.log(ans.join(' '));
        console.log("~");
    }
}
// } Driver Code Ends

//Back-end complete function Template for javascript
class Solution {
    rearrange(arr) {
        // Create a set from the input array to store unique elements
        const set1 = new Set(arr);

        // Iterate through the array and update elements based on the set
        for (let i = 0; i < arr.length; i++) {
            if (!set1.has(i)) {
                // If the element is not in the set, set it to -1
                arr[i] = -1;
            } else {
                // If the element is in the set, set it to its index value
                arr[i] = i;
            }
        }

        // Return the rearranged array
        return arr;
    }
}
