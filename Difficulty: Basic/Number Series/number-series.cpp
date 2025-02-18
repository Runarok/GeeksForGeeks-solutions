//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    /**
     * Function to find the position of the rightmost set bit in a number.
     * 
     * @param {int} n - The input number.
     * @returns {int} - The position of the rightmost set bit (1) in the binary representation of n.
     */
    int findNth(int n){
        // The expression (n & -n) isolates the rightmost set bit of n.
        // log2(n & -n) gives the position of this bit in base 2 logarithmic scale.
        return log2(n & -n);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        Solution ob;
        cout << ob.findNth(n) << endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends