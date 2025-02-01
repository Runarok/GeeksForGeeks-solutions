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

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let jobIDs = readLine().split(' ').map(x => parseInt(x));
        let deadlines = readLine().split(' ').map(x => parseInt(x));
        let profits = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.JobSequencing(jobIDs, deadlines, profits);
        console.log(ans[0] + " " + ans[1]);
    }
}
// } Driver Code Ends

// User-defined function Template for JavaScript  

/**  
 * Schedules jobs to maximize profit while meeting deadlines.  
 * @param {number[]} jobIds - Array of job IDs  
 * @param {number[]} deadlines - Array of job deadlines  
 * @param {number[]} profits - Array of job profits  
 * @param {number} jobCount - Total number of jobs  
 * @returns {number[]} - An array containing the number of jobs scheduled and the maximum profit  
 */  

class Solution {  
    // Function to schedule jobs based on maximum profit and deadline constraints  
    JobSequencing(jobIds, deadlines, profits) {  
        // Array to store job details (ID, deadline, profit)  
        let jobList = [];  

        for (let i = 0; i < deadlines.length; i++) {  
            jobList.push([jobIds[i], deadlines[i], profits[i]]);  
        }  

        // Sort jobs in descending order of profit  
        jobList.sort((a, b) => b[2] - a[2]);  

        // Determine the maximum deadline value  
        let maxDeadline = 0;  
        for (let d of deadlines) {  
            maxDeadline = Math.max(d, maxDeadline);  
        }  

        // Array to track scheduled jobs, initialized with -1 (empty slots)  
        let schedule = new Array(maxDeadline + 1).fill(-1);  

        let totalProfit = 0;  
        let jobCount = 0;  

        // Iterate through sorted jobs to schedule them  
        for (let job of jobList) {  
            let [jobId, deadline, profit] = job;  

            // Find the latest available slot before or on the deadline  
            for (let i = deadline; i > 0; --i) {  
                if (schedule[i] == -1) {  
                    schedule[i] = jobId;  
                    totalProfit += profit;  
                    ++jobCount;  
                    break;  
                }  
            }  
        }  

        // Return the number of jobs scheduled and the maximum profit  
        return [jobCount, totalProfit];  
    }  
}  
