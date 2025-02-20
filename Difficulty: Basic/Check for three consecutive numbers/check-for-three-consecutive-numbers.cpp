//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
  public:
    vector<int> consecutiveSum(int n) { 
        // If n is not divisible by 3, return {-1}
        if (n % 3 != 0) 
            return {-1};
        
        // Compute the three consecutive numbers
        n /= 3;
        return {n - 1, n, n + 1};
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
        vector<int>v = ob.consecutiveSum(n);
        for(int i=0;i<v.size();i++)cout<<v[i]<<" ";
            cout<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends