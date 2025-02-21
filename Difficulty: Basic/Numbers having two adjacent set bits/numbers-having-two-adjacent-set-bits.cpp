//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


// User function Template for C++
class Solution {
  public:
  typedef long long ll;

    // Function to check if a number has adjacent set bits
    string isAdjacentSetBits(long long int n) {
        // Shift the bits of n to the left and right by one position
        ll leftShifted = (n << (ll)1);  // Shifting n one position to the left
        ll rightShifted = (n >> (ll)1); // Shifting n one position to the right
        
        // Check if there are any set bits in the adjacent positions
        if (n & leftShifted || n & rightShifted) {
            return "Yes";  // Return "Yes" if adjacent set bits are found
        }
        
        // Return "No" if no adjacent set bits are found
        return "No";
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
        cout << ob.isAdjacentSetBits(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends