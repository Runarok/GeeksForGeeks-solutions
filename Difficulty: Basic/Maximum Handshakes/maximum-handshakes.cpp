//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to calculate the total number of handshakes possible 
    // among N people, where each person shakes hands with every other person exactly once.
    long long handShakes(int N) {
        return (long long)N * (N - 1) / 2; // Using combination formula nC2 = N * (N-1) / 2
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
        cout<<ob.handShakes(N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends