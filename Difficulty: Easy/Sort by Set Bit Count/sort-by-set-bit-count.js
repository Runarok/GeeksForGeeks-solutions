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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        obj.sortBySetBitCount(arr, n);
        printList(arr, n);
        
    }
}// } Driver Code Ends



// } Driver Code Ends



//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
*/

class Solution{
    sortBySetBitCount(arr, n){
       for(let i=0; i<n; i++){
           let num=arr[i];
           let binary=Number(num).toString(2);
           let noOfSetBits=0;
           for(let j=0; j<binary.length; j++){
               if(binary[j]==="1"){
                   noOfSetBits++;
               }
           }
           arr[i]=[arr[i],noOfSetBits];
       }
       
       arr.sort((item1, item2)=>item2[1]-item1[1]);
       for(let i=0; i<arr.length; i++){
           arr[i]=arr[i][0];
       }
       
       
       return arr;
    }
}