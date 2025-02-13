//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function template for C++
class Solution {
  public:
    int MOD = 1e9 + 7;  // Define the modulo value for large number handling

    int palindromicStrings(int n, int k) {
        long long count = 0;  // Variable to store the final count of palindromic strings

        // Loop over each string length from 1 to n
        for(int i = 1; i <= n; ++i){
            int chars = k;  // Initialize the number of characters available
            long long npr = 1;  // Variable to calculate the product of available choices

            // Loop over half of the string (rounded up), as palindromes mirror around the center
            for(int j = 0; j < (i + 1) / 2; ++j){
                npr = (npr * chars) % MOD;  // Multiply the choices, and take modulo to prevent overflow
                --chars;  // Decrement the available characters
            }

            // Add the result to the count and take modulo
            count = (count + npr) % MOD;
        }

        // Return the total count of palindromic strings modulo MOD
        return count;
    }
};


//{ Driver Code Starts.

int main() {

    ios_base::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;
    while (t--) {
        int n, k;
        cin >> n >> k;

        Solution ob;

        cout << ob.palindromicStrings(n, k) << "\n";
    
cout << "~" << "\n";
}

    return 0;
}
// } Driver Code Ends