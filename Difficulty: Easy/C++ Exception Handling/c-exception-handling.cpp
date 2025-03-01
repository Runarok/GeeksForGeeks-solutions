//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    int maxValue(int a, int b) {
        // Initialize maxValues to the sum of a and b
        int maxValues = a + b;
        
        try {
            // Compare and update maxValues with various operations between a and b
            maxValues = max(maxValues, a + b);
            maxValues = max(maxValues, a - b);
            // maxValues = max(maxValues, b - a); // This line is commented out
            maxValues = max(maxValues, b * a);
            
            // Check if b is zero to prevent division by zero
            if (b == 0)
                throw b;  // Throw exception if b is zero
            else
                maxValues = max(maxValues, a / b);  // Perform division if b is not zero
                
            return maxValues;
                
        }
        catch(int x) {
            // Return a large negative value if division by zero occurs
            return -999999;
        }
    }
};



//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int A, B;
        cin >> A >> B;

        Solution ob;
        int ans = ob.maxValue(A, B);
        if (ans == -999999)
            cout << "inf\n";
        else
            cout << ans << "\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends