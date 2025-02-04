//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    int maxSum(int N) {
        // code here
        if (N == 2) return 1; // Special case where N=2, the result is 1
        return N * (N - 1) / 2 - 1 + N / 2; // General formula for max sum
    }
};



//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int N;
        cin>>N;
        
        Solution ob;
        cout<<ob.maxSum(N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends