//{ Driver Code Starts
//Initial template for c++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

//User function Template for C++

class Solution{   
public:
    long long int nthMagicNo(int n) { 
        const long long MOD = 1e9 + 7;  // Large prime for modulo operation
        long long result = 0;           // To store the nth magic number
        long long power = 1;             // Represents powers of 5, starting with 5^0
        
        while (n > 0) {
            power = (power * 5) % MOD;   // Compute current power of 5 (mod MOD)
            
            // Check if the current bit (LSB) is set in 'n'
            if (n & 1) {
                result = (result + power) % MOD; // Add corresponding power of 5 if bit is set
            }
            
            n >>= 1; // Right shift 'n' to process the next bit
        }
        
        return result; // Final result is the nth magic number
    }
};



//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin >> n;
        Solution ob;
        cout << ob.nthMagicNo(n) << endl;
    
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends