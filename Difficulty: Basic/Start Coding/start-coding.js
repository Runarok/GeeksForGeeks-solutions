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
        let obj = new Solution();
        obj.printHello();
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
    * @returns none
    */
    printHello() {
        // code here
        console.log("Hello World");
    }
}
   
