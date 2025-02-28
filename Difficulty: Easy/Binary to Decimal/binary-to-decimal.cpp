//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    // Function to convert binary number (given as integer) to decimal
    int binary_to_decimal(int n) {
        int decimalValue = 0;  // To store the final decimal value
        int base = 1;          // The base starts from 1 (2^0)

        // Loop until n becomes 0
        while (n > 0) {
            int lastDigit = n % 10;  // Get the last digit (either 0 or 1)
            decimalValue = decimalValue + (lastDigit * base); // Add the corresponding decimal value
            n = n / 10;  // Remove the last digit
            base = base * 2; // Move to the next higher power of 2
        }

        return decimalValue;  // Return the final decimal value
    }
};


//{ Driver Code Starts.
int main() {
    int T;
    cin >> T;
    while (T--) {
        int B;
        cin >> B;
        Solution ob;
        int ans = ob.binary_to_decimal(B);
        cout << ans << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends