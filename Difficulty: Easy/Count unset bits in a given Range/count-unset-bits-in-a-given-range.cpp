//{ Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends


class Solution {
  public:
    // Function to count the number of unset bits (0s) between the positions l and r in the binary representation of n
    int countUnsetBits(int n, int l, int r) {
        int count = 0;  // Variable to store the count of unset bits (0s)
        int tmp = 0;    // Temporary variable to store the result of bitwise AND operation
        
        // If the number n is 1, then there are no unset bits, so return 0
        if (n == 1) {
            return 0;
        }
    
        // Iterate over the bit positions from l to r
        for (int i = l; i <= r; i++) {
            // Perform bitwise AND between n and 1 left-shifted by (i-1) to check if the bit at position i is 0
            tmp = n & (1 << (i - 1));
            
            // If the result is 0, it means the bit at position i is unset (0)
            if (tmp == 0) {
                count++;  // Increment the count of unset bits
            }
        }

        // Return the total count of unset bits in the range
        return count;
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n,l,r;
        
        cin>>n>>l>>r;

        Solution ob;
        cout << ob.countUnsetBits(n,l,r) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends