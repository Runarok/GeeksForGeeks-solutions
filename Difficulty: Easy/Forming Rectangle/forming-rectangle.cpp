//{ Driver Code Starts
//Initial template for c++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

// User function Template for C++

class Solution{   
public:
    typedef long long ll;
    
    // Function to count based on given conditions
    long int count(long int n) {
        // If n is odd, return 0 as no count is possible
        if (n % 2) {
            return 0;
        }

        n /= 2;  // Divide n by 2
        
        // If n is even, return n/2 - 1
        if (n % 2 == 0) {
            return n / 2 - 1;
        }

        // If n is odd, return n/2
        return n / 2;
    }
};


//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        long int n;
        cin >> n;
        Solution ob;
        cout << ob.count(n) << endl;
    
    
cout << "~" << "\n";
}
    return 0; 
} 

// } Driver Code Ends