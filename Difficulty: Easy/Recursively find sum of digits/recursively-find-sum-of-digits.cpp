//{ Driver Code Starts

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
public:
    // Function to compute (x^y) % mod using modular exponentiation
    int ModPow(int base, int exponent, int mod) {
        int result = 1;
        base = base % mod; // Reduce base within mod range
        
        // Loop until the exponent is greater than 0
        while (exponent > 0) {
            // If exponent is odd, multiply current base with result
            if (exponent % 2 == 1)  
                result = (result * base) % mod;
            
            // Divide the exponent by 2
            exponent = exponent / 2;
            
            // Square the base for the next iteration
            base = (base * base) % mod;
        }
        
        // Return the final computed result
        return result;
    }
    
    // Function to calculate the sum of digits of (A^B) % 9
    int SumofDigits(int A, int B) {
        // Compute (A^B) % 9 using modular exponentiation
        int modResult = ModPow(A, B, 9);
        
        // If the result is 0, return 9 (as sum of digits for multiples of 9 is 9)
        if (modResult == 0) {
            return 9;
        } else {
            // Otherwise, return the result as it is the sum of digits mod 9
            return modResult;
        }
    }
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int A, B;
		cin >> A >> B;
		Solution ob;
		int ans = ob.SumofDigits(A, B);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends