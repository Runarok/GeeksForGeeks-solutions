//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution {
public:
    int quickExponents(long long a, long long b) {
        // Initialize result to 1 and set modulus value
        int res = 1;
        int mod = 10;

        // Reduce a to its modulus
        a = a % mod;

        // Loop while b is greater than 0
        while (b > 0) {
            // If b is odd, multiply res by a and take modulus
            if (b & 1) {
                res = (res * a) % mod;
            }
            // Square the base and take modulus
            a = (a * a) % mod;

            // Right shift b by 1 (divide by 2)
            b = b >> 1;
        }
        // Add 10 to the result and take modulus to ensure a positive result
        return (res + 10) % 10;
    }
};


//{ Driver Code Starts.
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        long long a,b;
        cin>>a>>b;
        Solution ob;
        int ans  = ob.quickExponents(a,b);
        cout<<ans<<endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends