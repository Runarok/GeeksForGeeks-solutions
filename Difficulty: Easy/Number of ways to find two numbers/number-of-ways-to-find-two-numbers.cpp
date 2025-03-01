//{ Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
  typedef long long ll;
  
    // Function to calculate the number of ways
    long long numOfWays(int k) {
        // Check if k is odd
        if (k % 2 == 1) {
            ll x = (k - 1) / 2;  // Calculate x for odd k
            return x * x;  // Return the square of x
        }
        
        // If k is even
        ll x = k / 2;  // Calculate x for even k
        return x * (x - 1);  // Return x multiplied by (x - 1)
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int K;
        
        cin>>K;

        Solution ob;
        cout << ob.numOfWays(K) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends