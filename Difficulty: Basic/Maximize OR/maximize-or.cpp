//{ Driver Code Starts
//Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

#include <cmath>

class Solution {
  public:
    int getCount(int X) {
        // Count the number of set bits in X
        int setBitCount = 0, temp = X;
        while (temp) {
            if (temp & 1) setBitCount++;
            temp = temp >> 1;
        }        

        // Compute the result using the formula (X - 2^setBitCount + 1)
        return (X - pow(2, setBitCount) + 1);
    }
};


//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int X;
        cin >> X;
        Solution ob;
        cout << ob.getCount(X) << endl;
    }
    return 0;
}

// } Driver Code Ends