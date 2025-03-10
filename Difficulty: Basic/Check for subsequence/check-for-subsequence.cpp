//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std; 

// } Driver Code Ends

class Solution {
public:
    bool isSubSequence(string A, string B) {
        int i = 0, j = 0;
        int n = A.length(), m = B.length();

        // Traverse through both strings
        while (i < n && j < m) {
            // If characters match, move the pointer for A
            if (A[i] == B[j]) {
                i++;
            }
            // Always move the pointer for B
            j++;
        }

        // If we've gone through all characters of A, it's a subsequence
        return (i == n);
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    scanf("%d",&t);
    while(t--)
    {
        string A,B;
        cin>>A;
        cin>>B;  
        Solution ob;
        if(ob.isSubSequence(A,B))
            cout<<"1"<<endl;
        else
            cout<<"0"<<endl;
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends