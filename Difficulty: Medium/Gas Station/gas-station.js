//{ Driver Code Starts
// Initial Template for javascript

// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let gas = readLine().split(' ').map(Number);
        let cost = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.startStation(gas, cost);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


class Solution {
    startStation(gas, cost) {
        let total_gas = 0;
        let total_cost = 0;
        let current_balance = 0;
        let start_station = 0;

        for (let i = 0; i < gas.length; i++) {
            total_gas += gas[i];
            total_cost += cost[i];
            current_balance += gas[i] - cost[i];

            if (current_balance < 0) {
                // If current balance is negative, we can't complete the circuit from `start_station`
                // Reset the start station to the next one and reset current balance
                start_station = i + 1;
                current_balance = 0;
            }
        }

        // If total gas is less than total cost, it's impossible to complete the circuit
        return total_gas < total_cost ? -1 : start_station;
    }
}

