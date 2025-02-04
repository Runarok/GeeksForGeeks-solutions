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

        let pp1 = readLine().split(" ").map(Number);
        let s = pp1[0];
        let d = pp1[1];

        let obj = new Solution();
        let res = obj.smallestNumber(s, d);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    /**
    * @param {number} num
    * @returns {string}
    */
    // Helper function to find the sum of digits of a number
    findSumOfDigits(num) {
        let sum = 0;
        // Loop through each digit of the number and add it to the sum
        while (num) {
            sum += num % 10;  // Add the last digit to the sum
            num = parseInt(num / 10);  // Remove the last digit by dividing by 10
        }
        return sum;
    }

    /**
    * @param {number} s - Desired sum of digits
    * @param {number} d - Number of digits
    * @returns {number} - The smallest number with 'd' digits that has sum of digits equal to 's'
    */
    smallestNumber(s, d) {
        // Initialize the starting and ending numbers based on the number of digits (d)
        let startingNum = 1, endingNum = 9;

        // Adjust the range for the number of digits required (d)
        while (d > 1) {
            startingNum *= 10;
            endingNum = endingNum * 10 + 9;
            d--;
        }

        // Loop through all numbers in the range and check if any has the sum of digits equal to 's'
        while (startingNum <= endingNum) {
            let sum = this.findSumOfDigits(startingNum);
            // If a number with the desired sum of digits is found, return it
            if (sum == s) return startingNum;
            startingNum++;  // Increment the number to check the next possibility
        }

        // If no number satisfies the condition, return -1
        return -1;
    }
}

