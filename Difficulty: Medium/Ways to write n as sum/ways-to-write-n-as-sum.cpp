//{ Driver Code Starts
// Initial Template for C++

// } Driver Code Ends

class Solution {
  public:
    // Function to count the number of different ways in which n can be
    // written as a sum of two or more positive integers.
    int countWays(int n) {
        // table[i] will store the number of ways to represent the sum i.
        // We need n+1 elements in the table, since we include the base case of 0.
        int table[n + 1];

        // Initialize all table values to 0.
        for (int i = 0; i <= n; i++)
            table[i] = 0;

        int mod = (int)(1e9 + 7);  // Modulo value to handle large numbers

        // Base case: there is 1 way to represent 0 (using no numbers).
        table[0] = 1;

        // Iterate through all numbers from 1 to n-1, and update the table
        // with the number of ways to sum up to each value from 1 to n.
        for (int i = 1; i < n; i++) {
            for (int j = i; j <= n; j++) {
                // Update the table[j] by adding the number of ways to form the sum j-i
                // This accounts for including the current number i in the sum.
                table[j] = (table[j] + table[j - i]) % mod;
            }
        }

        // Return the number of ways to form the sum n, modulo mod.
        return table[n] % mod;
    }
};

//{ Driver Code Starts.
#include <bits/stdc++.h>
#include <string.h>
using namespace std;

//Position this line where user code will be pasted.

int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {
        string ns;
        getline(cin, ns);
        int n = stoi(ns);
        Solution obj;
        int res = obj.countWays(n);
        cout << res << endl;
        cout << "~" << endl;
        // string tl;
        // getline(cin, tl);
    }
    return 0;
}

// } Driver Code Ends