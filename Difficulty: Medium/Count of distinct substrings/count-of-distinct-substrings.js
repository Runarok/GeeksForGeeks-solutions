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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.countDistinctSubstring(s);
        if(res === -0)
            res = 0;
        console.log(res);
        
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s
 * @return {number}
 */

class State {
    constructor() {
        this.length = 0; // Length of the longest string represented by this state
        this.link = null; // Suffix link (points to the longest proper suffix)
        this.next = {}; // Transitions to other states based on character input
    }
}

class Solution {
    countDistinctSubstring(s) {
        let states = []; // Array to store all states of the suffix automaton
        let totalStates = 1, lastState = 0; // Initial state count and last active state
        states.push(new State()); // Initialize with the root state

        // Construct the suffix automaton
        for (const character of s) {
            let currentState = totalStates++; // Create a new state
            states.push(new State());
            states[currentState].length = states[lastState].length + 1; // Set its length

            let previousState = lastState;
            
            // Update transitions for previous states that don’t have this character
            while (previousState !== null && !(character in states[previousState].next)) {
                states[previousState].next[character] = currentState;
                previousState = states[previousState].link;
            }

            // If no proper suffix exists, link current state to root
            if (previousState === null) {
                states[currentState].link = 0;
            } else {
                const matchedState = states[previousState].next[character];

                // If the matched state has the expected length, link directly
                if (states[previousState].length + 1 === states[matchedState].length) {
                    states[currentState].link = matchedState;
                } else {
                    // Clone the matched state to create an intermediate state
                    let clonedState = totalStates++;
                    states.push(new State());
                    states[clonedState].length = states[previousState].length + 1;
                    states[clonedState].next = { ...states[matchedState].next }; // Copy transitions
                    states[clonedState].link = states[matchedState].link; // Copy suffix link

                    // Redirect transitions from previous states to the cloned state
                    while (previousState !== null && states[previousState].next[character] === matchedState) {
                        states[previousState].next[character] = clonedState;
                        previousState = states[previousState].link;
                    }

                    // Update links for matched and current states
                    states[matchedState].link = states[currentState].link = clonedState;
                }
            }

            lastState = currentState; // Move to the new state
        }

        // Calculate the number of distinct substrings
        let distinctSubstringCount = 0;
        for (let i = 1; i < totalStates; i++) {
            const current = states[i];
            const parent = states[current.link]; // Parent state in the automaton
            distinctSubstringCount += current.length - parent.length; // Count unique substrings from this state
        }

        return distinctSubstringCount + 1; // Include the empty substring
    }
}
