//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(arr) {
    console.log(arr.join(' '));
    console.log("~");
}

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        // Read employee names
        let employee = readLine().split(' ');

        // Read salaries
        let salary = readLine().split(' ').map(x => parseInt(x, 10));

        // Create Solution object and get sorted result
        let obj = new Solution();
        let res = obj.sortRecords(employee, salary);

        // Print the sorted employee names
        printList(res);
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string[]} employee
 * @param {number[]} salary
 * @returns {string[]}
 */

class Solution {
    sortRecords(employee, salary) {
        // Comparator function to sort by salary (ascending), 
        // and by name (alphabetically) if salaries are equal.
        const compareRecords = (record1, record2) => {
            const [name1, salary1] = record1;
            const [name2, salary2] = record2;

            if (salary1 === salary2) {
                // If salaries are the same, sort by name.
                return name1.localeCompare(name2);
            } else {
                // Otherwise, sort by salary.
                return salary1 - salary2;
            }
        };

        // Create an array of [name, salary] pairs.
        const records = [];
        for (let i = 0; i < salary.length; i++) {
            records.push([employee[i], salary[i]]);
        }

        // Sort the records using the comparator.
        records.sort(compareRecords);

        // Extract the sorted employee names.
        const sortedEmployees = records.map(record => record[0]);

        return sortedEmployees;
    }
}
