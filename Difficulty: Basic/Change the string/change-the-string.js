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
        let s = readLine();
        
        let obj = new Solution();
        let res = obj.modify(s);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

class Solution{
    modify(s){
        // Split the string into words
        let splitStr = s.split(' ');
        let res = "";
        
        // Iterate over each word
        for(let i = 0; i < splitStr.length; i++){
            // Check if the first character is uppercase
            if(splitStr[i][0] == splitStr[i][0].toUpperCase()){
                // If it's uppercase, convert the entire word to uppercase
                res += splitStr[i].toUpperCase();
            } else {
                // If it's lowercase, convert the entire word to lowercase
                res += splitStr[i].toLowerCase();
            }
        }
        
        // Return the modified string
        return res;
    }
}
