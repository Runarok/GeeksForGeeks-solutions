//{ Driver Code Starts
//Initial Template for javascript

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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.checkBinary(str);
        if(res == true)
            console.log("VALID");
        else
            console.log("INVALID");
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {boolean}
*/

class Solution {
    // Function to check whether a given string is a binary string or not.
    checkBinary(s) {
        // Check if the string does not contain a pattern where 1's and 0's are mixed in an invalid way
        return !/1{1,}0{1,}1{1,}/.test(s);
    }
}
