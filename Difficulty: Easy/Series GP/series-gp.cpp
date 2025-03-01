//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
	public:
   	// Function to calculate the Nth term of a geometric progression
   	int Nth_term(int a, int r, int n){
   	    // Modulo to handle large numbers
   	   int mod = 1000000007;
   	   
   	   // Initialize base and exponent for exponentiation by squaring
   	   long base = r;
   	   long ex = n - 1;  // Since the first term is a, the power starts from n-1
   	   long result = 1;
   	   
   	   // Exponentiation by squaring to efficiently compute (r^(n-1)) % mod
   	   while(ex > 0)
   	   {
   	       if(ex % 2 == 1)
   	       {
   	           result = (result * base) % mod;
   	       }
   	       base = (base * base) % mod;  // Square the base at each step
   	       ex /= 2;  // Halve the exponent
   	   }
   	   
   	   // Multiply the result by the first term 'a' and take mod again
   	   result = (result * a) % mod;
   	   
   	   // Return the final result as the Nth term
   	   return (int)result;
   	}    
};



//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int a, r, n;
		cin >> a >> r >> n;
		Solution ob;
		int ans = ob.Nth_term(a, r, n);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends