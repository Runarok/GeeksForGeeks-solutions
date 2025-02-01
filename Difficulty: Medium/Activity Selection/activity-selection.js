//{ Driver Code Starts
function main() {
    const readline = require('readline');
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let inputLines = [];
    rl.on('line', (line) => { inputLines.push(line.trim()); });

    rl.on('close', () => {
        let t = parseInt(inputLines[0].trim()); // Number of test cases
        let idx = 1;

        for (let i = 0; i < t; i++) {
            // Read the start times (array)
            let start = inputLines[idx].trim().split(' ').map(Number);
            idx++;

            // Read the end times (array)
            let end = inputLines[idx].trim().split(' ').map(Number);
            idx++;

            // Create solution object and call activitySelection
            let obj = new Solution();
            console.log(obj.activitySelection(start, end));
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends

class Solution {
    // Function to return the maximum number of activities that can be selected.
    activitySelection(start, end) {
        let n = start.length; // Get the number of activities

        // Step 1: Combine the start and end times into an array of activities
        let activities = [];
        for (let i = 0; i < n; i++) {
            activities.push([start[i], end[i]]);
        }

        // Step 2: Sort the activities based on their end time in ascending order
        // This allows us to always pick the activity that finishes earliest
        activities.sort((a, b) => a[1] - b[1]);

        // Step 3: Find the maximum number of activities that can be selected
        let count = 0;  // Variable to count the selected activities
        let lastActivityEnd = -1;  // Tracks the end time of the last selected activity

        // Loop through all the sorted activities
        for (let i = 0; i < activities.length; i++) {
            // If the start time of the current activity is greater than the last activity's end time
            if (activities[i][0] > lastActivityEnd) {
                count++;  // Increment the count of selected activities
                lastActivityEnd = activities[i][1];  // Update the end time of the last selected activity
            }
        }

        return count;  // Return the total number of selected activities
    }
}
