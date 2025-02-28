//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let seats = new Array(m);
        let input = readLine().split(" ").map((x) => parseInt(x));
        for(let j = 0;j < m;j++){
            seats[j] = input[j];
        }
        let obj = new Solution();
        let res = obj.is_possible_to_get_seats(n, m, seats);
        if(res == true){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} n - The number of seats to be occupied.
 * @param {number} m - The total number of available seats.
 * @param {number[]} seats - An array representing the seat status where 0 means empty and 1 means occupied.
 * @returns {boolean} - Returns true if it's possible to occupy 'n' seats, otherwise false.
 */
class Solution {
    // Function to check whether it is possible to get all seats occupied.
    is_possible_to_get_seats(n, m, seats) {
        // Initialize count to track the number of occupied seats
        let occupiedCount = 0;
        
        // If there is only one seat and it is empty, it is possible to occupy it
        if (seats.length === 1 && seats[0] === 0) {
            return true;
        }
        
        // Iterate through the seats to check availability and conditions for occupation
        for (let i = 0; i < m; i++) {
            // Check if the current seat and its adjacent seats are empty (i.e., can be occupied)
            if (seats[i] === 0 && seats[i + 1] === 0 && seats[i - 1] === 0 ||
                seats[i] === 0 && seats[i + 1] === 0 && i === 0 ||
                seats[i] === 0 && seats[i - 1] === 0 && i === m - 1) {
                
                // Occupy the current seat
                seats[i] = 1;
                // Increment the count of occupied seats
                occupiedCount++;
            }

            // If the required number of seats have been occupied, return true
            if (occupiedCount === n) {
                return true;
            }
        }

        // After checking all seats, return whether the count of occupied seats is equal to the required number
        return occupiedCount === n;
    }
}
