//{ Driver Code Starts
#include<bits/stdc++.h> 
using namespace std; 

// } Driver Code Ends

class Solution{   
public:
    long long nthCarolNumber(long long n){
        // Initialize the result to -1 (in case n <= 1)
        long long ans = -1;
        
        // If n > 1, we proceed to calculate the nth Carol number
        if(n > 1)
        {
            long long a = 2;  // Initialize base
            long long res = 1; // Initialize result to 1

            // Iterate while n is non-zero
            while(n)
            {
                // If the current bit is 1, multiply the result by a
                if(n % 2 == 1)
                {
                    res = res * a;
                    res = res % 1000000007; // Keep the result within the modulus
                }

                // Square the base and take mod to prevent overflow
                a = a * a;
                a = a % 1000000007;

                // Right shift n by 1 (essentially dividing by 2)
                n >>= 1;
            }

            // Compute the result as per the Carol number formula
            res = res - 1;  // Subtract 1
            ans = res * res;  // Square the result
            ans = ans % 1000000007;  // Take mod 1000000007

            // If the result is less than 2, adjust it by adding 1000000007 - 2
            if(ans < 2) 
                ans = ans + 1000000007 - 2;
            else 
                ans = ans - 2;
        }
        
        // Return the final Carol number
        return ans;
    }
};


//{ Driver Code Starts.
int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        long long n;
        cin >> n;
        Solution ob;
        cout << ob.nthCarolNumber(n) << endl;
    
cout << "~" << "\n";
}
    return 0; 
} 
// } Driver Code Ends