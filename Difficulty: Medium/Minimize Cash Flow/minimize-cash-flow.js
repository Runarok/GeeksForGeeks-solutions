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

function isValid(g, r, n) {
    function balance(matrix, n) {
        let bal = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                bal[i] -= matrix[i][j];
                bal[j] += matrix[i][j];
            }
        }
        return bal;
    }

    return JSON.stringify(balance(g, n)) === JSON.stringify(balance(r, n));
}

function main() {
    let t = parseInt(readLine());
    while (t--) {

        let n = parseInt(readLine());

        let g = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().split(' ').map(Number);
            g.push(a);
        }

        let obj = new Solution();
        let r = obj.minCashFlow(g, n);
        if (isValid(g, r, n) == false) {
            console.log("-1");
            continue;
        }
        let f = 0;
        for (let j of r) {
            for (let i of j) {
                if (i > 0) f++;
            }
        }
        console.log(f);
        // let S_res = '';
        // for(let row of res)
        // {
        //     let tmp = '';
        //     for(let col of row){
        //         tmp+=col;
        //         tmp+=' ';
        //     }
        //     console.log(tmp);
        // }
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n - number of friends
    * @param {number[][]} transaction - matrix of transactions
    * @returns {number[][]} - minimized cash flow transactions
    */
    
    // Function to calculate the net amounts for each person after all transactions
    netAmountsUtil(transaction, n) {
        const netAmounts = Array.from({ length: n }, () => 0);

        // Calculate net balance for each person by summing up what they owe and receive
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                netAmounts[i] -= transaction[i][j]; // `i` owes this amount
                netAmounts[j] += transaction[i][j]; // `j` receives this amount
            }
        }
        return netAmounts;
    }

    // Function to minimize cash flow transactions and return the optimized transaction list
    minCashFlow(transaction, n) {
        const netAmounts = this.netAmountsUtil(transaction, n);
        const transactionOp = Array.from({ length: n }, () => Array(n).fill(0)); // Array to record optimized transactions

        while (true) {
            // Find the person with maximum credit and the one with maximum debt
            const maxCreditor = netAmounts.indexOf(Math.max(...netAmounts));
            const maxDebtor = netAmounts.indexOf(Math.min(...netAmounts));

            // If no transactions are left to be settled, exit the loop
            if (netAmounts[maxCreditor] === 0 && netAmounts[maxDebtor] === 0) {
                return transactionOp;
            }

            // Amount to settle between maxDebtor and maxCreditor
            const amountToSettle = Math.min(-netAmounts[maxDebtor], netAmounts[maxCreditor]);

            // Adjust the net balances after the settlement
            netAmounts[maxCreditor] -= amountToSettle;
            netAmounts[maxDebtor] += amountToSettle;

            // Record the transaction
            transactionOp[maxDebtor][maxCreditor] += amountToSettle;
        }
    }
}
