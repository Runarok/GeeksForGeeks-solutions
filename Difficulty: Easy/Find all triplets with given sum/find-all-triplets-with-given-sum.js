//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.threeSum(arr, k);
        res = res.sort((x, y) => {
            for (let i = 0; i < 3; i++) {
                if (x[i] !== y[i]) {
                    return x[i] - y[i];
                }
            }
            return 0;
        });
        if (res.length === 0) {
            process.stdout.write('[]\n');
        }
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                process.stdout.write(res[i][j] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number[]} arr
     * @param {number} target
     * @return {number[][]}
     */
    threeSum(arr, target) {
        // Initialize result array to store the triplets
        let result = [];
        
        // Sort the array to facilitate easier identification of triplets
        arr.sort((a, b) => a - b);
        
        // Iterate through the array to find valid triplets
        for (let i = 0; i < arr.length - 1; i++) {
            let startIndex = i + 1;  // Start checking from the next element
            let triplets = this.twoSum2(arr, target - arr[i], startIndex, arr[i]);

            // If valid triplets are found, add them to the result array
            if (triplets.length > 0) {
                triplets.forEach(triplet => {
                    result.push(triplet);
                });
            }
        }
        
        // Return the found triplets
        return result;
    }
    
    // Function to find two numbers in the array that sum up to the target
    twoSum(arr, target, startIndex, extraValue) {
        let endIndex = arr.length - 1;  // Set end pointer
        let result = [];  // Initialize result array to store valid pairs

        // Iterate through the array to find valid pairs
        while (startIndex < endIndex) {
            let sum = arr[startIndex] + arr[endIndex];
            
            // If the pair sum matches the target, create a triplet
            if (sum === target) {
                let triplet = [arr[startIndex], arr[endIndex], extraValue];
                triplet.sort((a, b) => a - b);  // Sort the triplet
                result.push(triplet);  // Add the triplet to result
                startIndex++;  // Move the start pointer to the right
            }
            // If the sum is greater than the target, move the end pointer left
            else if (sum > target) {
                endIndex--;
            }
            // If the sum is less than the target, move the start pointer right
            else {
                startIndex++;
            }
        }

        // Return the valid pairs as triplets
        return result;
    }

    // Function to find two numbers in the array that sum up to the target
    // using a hash map to optimize the search for the second number
    twoSum2(arr, target, startIndex, extraValue) {
        let countMap = new Map();  // Map to keep track of frequencies of numbers
        let result = [];  // Initialize result array to store valid triplets

        // Iterate through the array starting from the given index
        for (; startIndex < arr.length; startIndex++) {
            let currentNum = arr[startIndex];
            
            // If the complement exists in the map, add the triplet to result
            if (countMap.has(target - currentNum)) {
                let occurrences = countMap.get(target - currentNum);
                
                // Add the triplet for each occurrence of the complement
                Array.from({ length: occurrences }).forEach(() => {
                    let triplet = [currentNum, target - currentNum, extraValue];
                    triplet.sort((a, b) => a - b);  // Sort the triplet for consistency
                    result.push(triplet);
                });
            }

            // Update the frequency map with the current number
            countMap.set(currentNum, (countMap.get(currentNum) || 0) + 1);
        }

        // Return the valid triplets
        return result;
    }
}
