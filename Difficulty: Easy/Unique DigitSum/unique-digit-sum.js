//{ Driver Code Starts
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
    const t = parseInt(readLine());
    const solution = new Solution();
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        console.log(solution.uniqueDigitSums(arr));
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to calculate the sum of digits of a number 'n'
    sum(n) {
        let digitSum = 0;
        // Keep extracting the last digit and adding to the sum until the number is a single digit
        while (n > 9) {
            digitSum += n % 10;  // Add the last digit to the sum
            n = Math.floor(n / 10);  // Remove the last digit
        }
        // Add the last remaining digit to the sum
        return digitSum + n;
    }

    // Function to find the count of unique sums of digits from the input array 'arr'
    uniqueDigitSums(arr) {
        // Set to store unique sums of digits
        const uniqueSums = new Set();
        
        // Iterate through the array and calculate the sum of digits for each number
        for (const num of arr) {
            uniqueSums.add(this.sum(num));  // Add the sum of digits to the set
        }
        
        // Return the number of unique sums
        return uniqueSums.size;
    }
}
