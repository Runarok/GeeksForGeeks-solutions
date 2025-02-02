//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        let s = readLine();
        let obj = new Solution();
        let res = obj.modify(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} n
 * @return {string} 
*/

class Solution {
    modify(s) {
        let vowels = 'aeiou';
        let vowelList = [];
        
        // Step 1: Collect all vowels in the string
        for (let i = 0; i < s.length; i++) {
            if (vowels.includes(s[i])) {
                vowelList.push(s[i]);
            }
        }
        
        // Step 2: Reverse the vowels list
        vowelList.reverse();
        
        // Step 3: Rebuild the string with reversed vowels
        let result = '';
        let vowelIndex = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (vowels.includes(s[i])) {
                result += vowelList[vowelIndex];
                vowelIndex++;
            } else {
                result += s[i];
            }
        }
        
        return result;
    }
}
