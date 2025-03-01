//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    // Helper function to calculate XOR from 0 to n
    int func(int n) {
        int mod = n % 4;
        // Based on n % 4, return the corresponding result
        if (mod == 0)
            return n;
        else if (mod == 1)
            return 1;
        else if (mod == 2)
            return n + 1;
        else if (mod == 3)
            return 0;
    }
    
    // Function to find XOR of numbers in the range [l, r]
    int findXOR(int l, int r) {
        // XOR of numbers from 0 to (l-1) and 0 to r
        int x1 = func(l - 1), x2 = func(r);
        // XOR the results to get the XOR of the range [l, r]
        return x1 ^ x2;
    }
};


//{ Driver Code Starts.
int main() {
    int t = 1;
    cin >> t;

    while (t--) {
        // Input

        int l, r;
        cin >> l >> r;

        Solution obj;
        cout << obj.findXOR(l, r) << endl;
    
cout << "~" << "\n";
}
}
// } Driver Code Ends