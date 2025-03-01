//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
public:
    // Function to return 1 for even N and -1 for odd N
    int fibExpression(int N){
        // If N is even, return 1; if N is odd, return -1
        return (N % 2 == 0) ? 1 : -1;
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
        cout<<ob.fibExpression(N)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends