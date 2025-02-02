//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
  for (; i < t; i++) {
    let [d, m, y] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.getDayOfWeek(d, m, y);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} day - The day of the month.
 * @param {number} month - The month number (1 for January, 2 for February, etc.).
 * @param {number} year - The year in YYYY format.
 * @return {string} - The name of the day of the week (e.g., "Sunday").
 */
class Solution {
  getDayOfWeek(day, month, year) {
    // Predefined array to handle the month codes for Zeller's formula
    let monthCode = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    
    // Array of days in the week, starting from Sunday
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Adjust year for January and February according to Zeller's formula
    year -= (month < 3) ? 1 : 0;
    
    // Zeller's formula to compute the day of the week
    let calculatedDay = (year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + monthCode[month - 1] + day) % 7;
    
    // Return the corresponding day of the week
    return weekDays[calculatedDay];
  }
}
