//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    int isConnected(int a, int b) {
        // Calculate the absolute difference between the two numbers
        const int difference = abs(a - b);
        
        // Check connectivity condition:
        // - If the smaller number is odd, the difference must be at most 2
        // - If the smaller number is even, the difference must be exactly 2
        return (min(a, b) & 1) ? (difference <= 2) : (difference == 2);
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    cin>>t;
    while(t--){
        int a, b;
        cin>>a>>b;
        
        Solution ob;
        int ans = ob.isConnected(a, b);
        if(ans)
            cout<<"YES\n";
        else
            cout<<"NO\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends