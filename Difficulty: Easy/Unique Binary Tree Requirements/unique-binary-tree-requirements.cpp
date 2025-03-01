//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

// User function Template for C++

class Solution
{
public:
    // Function to check if constructing tree is possible from given orders
    bool isPossible(int a, int b)
    {
        // Can construct from preorder and inorder
        if ((a == 1 && b == 2) || (b == 1 && a == 2)) {
            return true;
        }
        // Can construct from inorder and postorder
        else if ((a == 2 && b == 3) || (b == 2 && a == 3)) {
            return true;
        }
        else {
            return false;
        }
    }
};


//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int a,b; 
        cin>>a>>b;
        Solution obj;
        bool ans=obj.isPossible(a,b);
        cout<<ans<<"\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends