//{ Driver Code Starts
//Initial template for c++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends
//User function Template for C++

class Solution {   
public:
    pair<int, int> get(int a, int b) {
        // Swapping without a temporary variable using arithmetic operations
        a = a + b;  // Step 1: Add b to a
        b = a - b;  // Step 2: Subtract the new value of a by b to get original a
        a = a - b;  // Step 3: Subtract the new value of b from a to get original b
        
        // Return the swapped values as a pair
        return {a, b};
    }
};




//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int a, b;
        cin >> a >> b;
        
        Solution ob;
        pair<int, int>p = ob.get(a, b);
        cout << p.first << ' ' << p.second << endl;
    
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends