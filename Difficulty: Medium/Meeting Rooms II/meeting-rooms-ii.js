//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

const readline = require('readline');

function main() {
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let t;
    let testCases = [];
    let inputCount = 0;

    rl.question('', (line) => {
        t = parseInt(line.trim());
        inputCount = t * 2;

        rl.on('line', (line) => {
            testCases.push(line.trim());
            if (testCases.length === inputCount) {
                rl.close();
            }
        });
    });

    rl.on('close', () => {
        const solution = new Solution();
        for (let i = 0; i < t; i++) {
            const arr1 = testCases[2 * i].split(' ').map(Number);
            const arr2 = testCases[2 * i + 1].split(' ').map(Number);
            let res = solution.minMeetingRooms(arr1, arr2);
            console.log(res);
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends

/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
    minMeetingRooms(start, end) {
        let numMeetings = start.length;
        let roomsNeeded = 0;
        let endPointer = 0;

        // Sort the start and end times in ascending order
        start = start.sort((a, b) => a - b);
        end = end.sort((a, b) => a - b);

        // Iterate through the sorted start times
        for (let i = 0; i < numMeetings; i++) {
            // If the meeting can start after the previous one ends, reuse a room
            if (start[i] >= end[endPointer]) {
                endPointer++;
            } else {
                // Otherwise, we need a new room
                roomsNeeded++;
            }
        }

        return roomsNeeded;
    }
}
