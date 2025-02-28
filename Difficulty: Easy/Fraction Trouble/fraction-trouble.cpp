//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++
class Solution {
  public:
    typedef long double ld;
    
    // Function to find a pair of numbers (i, j) where i > n and j > d, such that
    // i/j is the closest but smaller than n/d
    vector<int> numAndDen(int n, int d) {
        // Calculate the value of n/d
        double val = (double)n / d;
        
        // Initialize max to store the closest value smaller than n/d
        double max = -1;
        
        // Initialize the result vector to store the final pair
        vector<int> res;
        
        // Loop through values of i greater than n
        for (int i = n + 1; i <= 10000; i++) {
            // Calculate the corresponding value of j using the formula
            int j = (i * d) / n + 1;
            
            // If j exceeds 10000, break the loop
            if (j > 10000) {
                break;
            }
            
            // Calculate the value of i/j
            double v = (double)i / j;
            
            // Check if this value is smaller than n/d but larger than the previous max
            if (v < val && v > max) {
                max = v;
                // Update the result pair with i and j
                res = {i, j};
            }
        }
        
        // Return the result vector containing the pair (i, j)
        return res;
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n,d;
        cin >> n >> d;
        Solution ob;
        vector<int>ans=ob.numAndDen(n,d);
        for(int i=0;i<ans.size();i++)cout<<ans[i]<<" ";
        cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends