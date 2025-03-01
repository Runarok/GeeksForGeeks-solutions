//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to calculate the number of ways based on the given value of n
    long long countWays(long long n) {
        // Formula to calculate the number of ways: (n + 1) * (n + 2) / 2
        return (n + 1) * (n + 2) / 2;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        long long N;
        cin>>N;
        
        Solution ob;
        cout<<ob.countWays(N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends