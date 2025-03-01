//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {
public:
    long long totalMoney(long long k) {
        // Calculate the value of n based on the logarithmic relation.
        long long n = ceil(log2(k / 3.0 + 1));

        // Calculate the remaining 'k' after subtracting the sum of the first (n-1) terms.
        long long remainingK = k - 3 * (pow(2, n - 1) - 1);

        // Calculate the start value based on the 3 times the previous powers of 2.
        long long start = 3 * pow(2, n - 1);

        // Return the final result using the derived start value and remaining 'k'.
        return start - remainingK + 1;
    }
};



//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        long long N;
        cin >> N;
        Solution ob;
        cout << ob.totalMoney(N) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends