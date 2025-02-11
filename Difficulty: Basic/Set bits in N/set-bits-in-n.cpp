//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++
// Back-end complete function Template for C++

class Solution {
  public:    
    int setBitCount(int number) {
        // Returns the count of set bits (1s) in the binary representation of 'number'
        return __builtin_popcount(number);
    }
};


//{ Driver Code Starts.

int main()
{
    int t; cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        
        Solution ob;
        
        cout <<ob.setBitCount(n) << endl;
    
cout << "~" << "\n";
}
}



// } Driver Code Ends