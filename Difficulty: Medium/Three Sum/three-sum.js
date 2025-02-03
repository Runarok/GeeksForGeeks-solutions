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
        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.triplets(arr);
        if (res.length == 0) {
            console.log();
        } else {
            for (let row of res) {
                let tmp = '';
                for (let col of row) {
                    tmp += col;
                    tmp += ' ';
                }
                console.log(tmp.trim());
            }
        }
    }
}

// } Driver Code Ends


class Solution {
    /**
     * @param {number[]} arr
     * @returns {number[][]}
     */
    triplets(arr) {
        // Sort the array to help with the two-pointer technique
        arr.sort((a, b) => a - b);
        
        const ans = [];
        
        // Iterate through the array to find the triplets
        for (let i = 0; i < arr.length; i++) {
            // Skip duplicate elements to avoid repeating triplets
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            // Set the target sum to the negative of arr[i]
            const target = -arr[i];
            
            let start = i + 1;
            let end = arr.length - 1;
            
            // Use two pointers to find pairs that sum up with arr[i] to form the triplet
            while (start < end) {
                const sum = arr[start] + arr[end];
                
                if (sum === target) {
                    // If the sum matches the target, add the triplet to the result
                    ans.push([arr[i], arr[start], arr[end]]);
                    
                    // Skip duplicate elements for start and end pointers to avoid repeating triplets
                    while (start < end && arr[start] === arr[start + 1]) start++;
                    while (start < end && arr[end] === arr[end - 1]) end--;
                    
                    start++;
                    end--;
                } else if (sum > target) {
                    // If the sum is greater than the target, move the end pointer to the left
                    end--;
                } else {
                    // If the sum is less than the target, move the start pointer to the right
                    start++;
                }
            }
        }
        
        return ans; // Return the list of triplets
    }
}
