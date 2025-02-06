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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let N = parseInt(input_line[0]);
        let K = parseInt(input_line[1]);

        input_line = readLine().split(' ');
        let tasks = new Array(N);
        for(let i=0;i<N;i++)
        {
            tasks[i] = input_line[i];
        }
        
        
        let obj = new Solution();
        let ans = obj.leastInterval(N, K, tasks);
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends



// User function template for JavaScript
/**
 * @param {number} N - Total number of tasks.
 * @param {number} K - Cooling period between the same task.
 * @param {number[]} tasks - Array representing tasks (each task as an integer).
 * @returns {number} - The minimum time required to complete all tasks.
 */

class Solution {
    // Function to compute the least number of operations needed to complete all tasks
    leastInterval(N, K, tasks) {
        // Create a frequency map to count occurrences of each task
        const taskFrequency = tasks.reduce((freqMap, task) => {
            freqMap[task] = (freqMap[task] || 0) + 1;
            return freqMap;
        }, {});

        // Get an array of task frequencies
        const frequencyArray = Object.values(taskFrequency);

        // Find the maximum frequency among tasks
        const maxFrequency = Math.max(...frequencyArray);

        // Count how many tasks have this maximum frequency
        const maxFrequencyCount = frequencyArray.filter(freq => freq === maxFrequency).length;

        // Compute the minimum time required considering cooling period constraints
        return Math.max(N, (maxFrequency - 1) * (K + 1) + maxFrequencyCount);
    }
}
