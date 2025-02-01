//{ Driver Code Starts
// Position this line where user code will be pasted.
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

const inputLines = [];
rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => {
    const t = parseInt(inputLines[0]);
    const solution = new Solution();
    let index = 1;

    for (let i = 0; i < t; i++) {
        const arr = inputLines[index].split(' ').map(Number);
        const ans = solution.printUnsorted(arr);
        console.log(ans[0], ans[1]);
        console.log('~');
        index++;
    }
});
// } Driver Code Ends

class Solution {  
    printUnsorted(arr) {  
        let length = arr.length;
        let leftIndex = -1, rightIndex = -1;

        // Find the first index where the array is unsorted from the left
        for (let i = 0; i < length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                leftIndex = i;
                break;
            }
        }

        // If the array is already sorted, return default indices
        if (leftIndex === -1) return [0, 0];

        // Find the first index where the array is unsorted from the right
        for (let j = length - 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                rightIndex = j;
                break;
            }
        }

        // Find the min and max values in the unsorted subarray
        let minValue = Infinity;
        let maxValue = -Infinity;
        for (let k = leftIndex; k <= rightIndex; k++) {
            minValue = Math.min(minValue, arr[k]);
            maxValue = Math.max(maxValue, arr[k]);
        }

        // Expand left boundary if needed
        while (leftIndex > 0 && arr[leftIndex - 1] > minValue) {
            leftIndex--;
        }

        // Expand right boundary if needed
        while (rightIndex < length - 1 && arr[rightIndex + 1] < maxValue) {
            rightIndex++;
        }

        return [leftIndex, rightIndex];
    }  
}
