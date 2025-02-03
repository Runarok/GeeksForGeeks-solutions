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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.killinSpree(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @returns {number}
*/

class Solution
{
    // Function to calculate the number of people that can be "killed"
    killinSpree(n)
    {
        let currentPerson = 1; // Starting with the first person
        let killsCount = 0; // To track how many people are killed
        
        // Loop until the strength required for the next person exceeds the remaining strength
        while(true)
        {
            let requiredStrength = currentPerson * currentPerson; // Calculate the strength needed for the current person
            
            // Check if the remaining strength is enough to kill this person
            if(n >= requiredStrength)
            {
                n -= requiredStrength; // Deduct the strength for this person
                killsCount++; // Increment the kill count
                currentPerson++; // Move to the next person
            }
            else
            {
                break; // Break out of the loop if not enough strength for the next person
            }
        }
        
        return killsCount; // Return the total number of people killed
    }
}
