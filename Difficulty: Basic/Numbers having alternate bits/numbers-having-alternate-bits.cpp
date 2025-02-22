//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Function to check if the bits of the number are in alternating order (0, 1, 0, 1, ...)
    long long int bitsAreInAltOrder(long long int n) {
        // Perform bitwise AND operation between n and (n shifted by 1)
        // If the result is 0, the bits are in alternating order
        if (n & (n >> 1) == 0) {
            return 1; // Return 1 if bits are in alternating order
        }
        return 0; // Return 0 if bits are not in alternating order
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long int n;
        cin >> n;
        Solution ob;
        cout << ob.bitsAreInAltOrder(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends