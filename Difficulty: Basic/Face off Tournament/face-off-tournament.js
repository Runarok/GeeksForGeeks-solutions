//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let [m, n] = readLine().split(' ').map(Number);

        let solution = new Solution();
        console.log(solution.winner(arr, m, n));
        console.log("~")
    }
}
// } Driver Code Ends

class Solution {
    winner(arr, m, n) {
        let ramWins = 0;
        let rohanWins = 0;

        // Iterate through all contenders
        for (let strength of arr) {
            if (strength % m === 0) {
                // Ram wins this match if the strength is divisible by m
                ramWins++;
            } else if (strength % n === 0) {
                // Rohan wins if it's not divisible by m but divisible by n
                rohanWins++;
            }
        }

        // Determine the winner based on the count of wins
        if (ramWins > rohanWins) {
            return "Ram";
        } else if (rohanWins > ramWins) {
            return "Rohan";
        } else {
            return "Both";
        }
    }
}
