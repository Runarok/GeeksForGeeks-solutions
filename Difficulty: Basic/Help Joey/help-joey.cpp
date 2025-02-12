//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to count the number of SCCs (Strongly Connected Components)
    int countSCC(int totalNodes, int totalEdges) {
        // If the number of nodes is less than twice the edges, compute SCCs accordingly
        return totalNodes < 2 * totalEdges ? totalNodes / 2 : (totalEdges + (totalNodes - 2 * totalEdges) / 4);
    }
};


//{ Driver Code Starts.
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int a, b;cin>>a>>b;
        Solution ob;
        int ans  = ob.countSCC(a,b);
      
        cout<<ans<<endl;
    }
    return 0;
}
// } Driver Code Ends