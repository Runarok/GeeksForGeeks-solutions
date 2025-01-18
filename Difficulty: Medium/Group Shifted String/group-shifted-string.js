//{ Driver Code Starts


// Driver code
const readline = require("readline")
                     .createInterface({input : process.stdin, output : process.stdout});

let t = null;
let inputs = [];
readline.on("line", line => {
    if (t === null) {
        t = parseInt(line);
    } else {
        inputs.push(line.trim());
        if (inputs.length === t) {
            readline.close();
        }
    }
});

readline.on("close", () => {
    const sol = new Solution();
    inputs.forEach(input => {
        const arr = input.split(" ");
        const result = sol.groupShiftedString(arr);
        result.forEach(group => group.sort());
        result.sort((a, b) => a[0].localeCompare(b[0]));
        result.forEach(group => { console.log(group.join(" ")); });
        console.log("~");
    });
});

// } Driver Code Ends


class Solution {
    groupShiftedString(arr) {
        // Function to get the normalized shift pattern of a string
        const getShiftPattern = (str) => {
            let pattern = [];
            for (let i = 1; i < str.length; i++) {
                let diff = (str.charCodeAt(i) - str.charCodeAt(i - 1) + 26) % 26;
                pattern.push(diff);
            }
            return pattern.join(",");
        };

        // Hash map to store groups by their shift pattern
        let groups = new Map();

        for (let str of arr) {
            let pattern = getShiftPattern(str);
            if (!groups.has(pattern)) {
                groups.set(pattern, []);
            }
            groups.get(pattern).push(str);
        }

        // Return all groups as an array
        return Array.from(groups.values());
    }
}
