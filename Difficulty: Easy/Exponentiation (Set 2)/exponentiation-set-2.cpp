//{ Driver Code Starts
//Initial template for c++

#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

// User function Template for C++

class Solution{   
public:
    // Function to count the number of bits in the binary representation of b
    int msb(long long int b)
    {
        int count = 0;
        // While b is non-zero, count the number of bits by shifting b
        while(b)
        {
            count++;
            b >>= 1;  // Right shift b by 1
        }
        return count;
    }

    // Function to calculate (a^b) % 1000000007 using binary exponentiation
    long long int power(int a, long long int b) { 
        long long int res = 1;
        
        // Start from the most significant bit and iterate backwards
        for(int i = msb(b); i >= 0; i--)
        {
            // Square the result to handle the current bit
            res = ((res % 1000000007) * (res % 1000000007)) % 1000000007;

            // If the current bit in b is set, multiply res by a
            if(b & (1U << i))
            {
                res = (res * (a % 1000000007)) % 1000000007;
            }
        }
        return res;
    }
};



//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        int a;
        long long b;
        cin >> a >> b;
        Solution ob;
        cout << ob.power(a, b) << endl;
    
    
cout << "~" << "\n";
}
    return 0; 
} 



// } Driver Code Ends