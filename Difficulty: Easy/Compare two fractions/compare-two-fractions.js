//{ Driver Code Starts

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
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();
        let obj = new Solution();
        let res = obj.compareFrac(str);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
    * @param string str
    * @returns string
    */
    compareFrac(str) {
        // Split the input string by comma to separate two fractions
        var x = str.split(",").slice();
        
        // Proceed if the array has at least two fractions
        if(x.length > 0) {
            // Extract the two fractions as strings
            var a = x[0];
            var b = x[1];
            
            // Split the first fraction by "/" to get the numerator and denominator
            var aa = a.split("/").slice();
            var aaValue = aa[0] / aa[1];  // Compute the float value of the first fraction
            
            // Split the second fraction by "/" to get the numerator and denominator
            var bb = b.split("/").slice();
            var bbValue = bb[0] / bb[1];  // Compute the float value of the second fraction
            
            // Compare the two computed values
            if(aaValue == bbValue) {
                return "equal";  // If both are equal, return "equal"
            } else if(aaValue > bbValue) {
                return a.replace(/\s/g, '');  // If the first fraction is greater, return it
            } else {
                return b.replace(/\s/g, '');  // If the second fraction is greater, return it
            }
        }
    }
}
