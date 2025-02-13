//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.convertToWords(n);
        console.log(`"${res}"`);
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    // Function to convert a number into its English words representation
    convertToWords(n) {
        // If the number is 0, return "Zero"
        if (n === 0) return "Zero";
        
        // Array for units (1 to 19)
        const units = [ "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        
        // Array for tens (20, 30, ..., 90)
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        
        // Array for large number multipliers (Thousand, Million, Billion)
        const multiplier = ["", "Thousand", "Million", "Billion"];
        
        let res = ""; // To store the final result
        let group = 0; // To handle thousands, millions, billions
        
        // Loop through the number by groups of 3 digits
        while (n > 0) {
            if (n % 1000 !== 0) {
                let value = n % 1000;
                let temp = "";
                
                // Handle hundreds place
                if (value >= 100) {
                    temp = units[Math.floor(value / 100)] + " Hundred ";
                    value %= 100;
                }

                // Handle tens place (20, 30, ..., 90)
                if (value >= 20) {
                    temp += tens[Math.floor(value / 10)] + " ";
                    value %= 10;
                }

                // Handle units place (1 to 19)
                if (value > 0) {
                    temp += units[value] + " ";
                }

                // Add the multiplier for this group (Thousand, Million, etc.)
                temp += multiplier[group] + " ";
            
                // Append the result of this group to the final result
                res = temp + res;
            }

            // Move to the next group (thousands, millions, etc.)
            n = Math.floor(n / 1000);
            group++;
        }

        // Return the final result after trimming any extra spaces
        return res.trim();
    }
}
