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

        let obj = new Solution();
        let res = obj.UniquePartitions(n);

        let ans = '';
        for (let row of res) {
            let tmp = '';
            for (let col of row) {
                ans += col;
                ans += ' ';
            }
            // console.log(tmp);
        }
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    constructor() { 
        this.temp = []; // Temporary array to store the current partition
    }

    solve(nums, partitions, index, currentSum, targetSum) {

        // Base case: if the current sum equals the target sum, store the current partition
        if (currentSum === targetSum) {
            partitions.push([...this.temp]); // Save the current partition
            return;
        }

        // If index is less than 0, return (we've exhausted the list of numbers)
        if (index < 0) {
            return;
        }

        // Recursive call to not take the current element (move to the next element)
        this.solve(nums, partitions, index - 1, currentSum, targetSum);
        
        // If the current sum is less than the target, we can include the current number
        if (currentSum < targetSum) {
            this.temp.push(nums[index]); // Add the current element to the partition

            // Recursive call to take the current element again (allow repeated usage)
            this.solve(nums, partitions, index, currentSum + nums[index], targetSum);

            this.temp.pop(); // Backtrack by removing the last added element
        }
    }

    UniquePartitions(n) {
        const nums = Array.from({length : n}, (_, i) => i + 1); // Generate an array of numbers from 1 to n
        const partitions = []; // Array to store the final list of partitions

        // Start the recursive partition process
        this.solve(nums, partitions, n - 1, 0, n);

        partitions.reverse(); // Reverse the partitions to maintain the correct order
        return partitions; // Return the result
    }
}
