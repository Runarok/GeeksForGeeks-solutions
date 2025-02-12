//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

class student {
    constructor() {
        this.first_name = '';
        this.last_name = '';
    }

    set_name(f, l) {
        this.first_name = f;
        this.last_name = l;
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let input = readLine().split(" ");
        let f = input[0];
        let l = input[1];

        let s1 = new student();
        s1.set_name(f, l);
        let obj = new Solution();
        let res = obj.check_name(s1);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    check_name(k) {
        // Create arrays to store the frequency of each character in first_name and last_name
        let firstNameFreq = new Array(52).fill(0); // Frequency of letters in first_name
        let lastNameFreq = new Array(52).fill(0); // Frequency of letters in last_name

        // Count frequencies of letters in first_name
        for (let i = 0; i < k.first_name.length; i++) {
            if (k.first_name[i] == k.first_name[i].toUpperCase()) {
                // If the letter is uppercase, calculate index for uppercase letters (26-51)
                let index = k.first_name.charCodeAt(i) - 65 + 26; // Convert character to index (0-25 for uppercase)
                firstNameFreq[index]++;
            } else {
                // If the letter is lowercase, calculate index for lowercase letters (0-25)
                let index = k.first_name.charCodeAt(i) - 97; // Convert character to index (0-25 for lowercase)
                firstNameFreq[index]++;
            }
        }

        // Count frequencies of letters in last_name
        for (let i = 0; i < k.last_name.length; i++) {
            if (k.last_name[i] == k.last_name[i].toUpperCase()) {
                // If the letter is uppercase, calculate index for uppercase letters (26-51)
                let index = k.last_name.charCodeAt(i) - 65 + 26; // Convert character to index (0-25 for uppercase)
                lastNameFreq[index]++;
            } else {
                // If the letter is lowercase, calculate index for lowercase letters (0-25)
                let index = k.last_name.charCodeAt(i) - 97; // Convert character to index (0-25 for lowercase)
                lastNameFreq[index]++;
            }
        }

        // Compare frequencies of corresponding letters in both first_name and last_name
        for (let i = 0; i < 52; i++) {
            // If any frequency doesn't match, it's not an anagram
            if (firstNameFreq[i] != lastNameFreq[i]) {
                return "NOT ANAGRAM";
            }
        }

        // If all frequencies match, it is an anagram
        return "ANAGRAM";
    }
}
