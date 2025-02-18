//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution{
    public:
    // Function to check if the last digit of N modulo 9 is prime
	int digitPrime(int N){
	    // Calculate the remainder of N when divided by 9
	    int lastDigitMod9 = N % 9;
	    
	    // Check if the remainder is a prime number (2, 3, 5, or 7)
		 if(lastDigitMod9 == 2 || lastDigitMod9 == 3 || lastDigitMod9 == 5 || lastDigitMod9 == 7){
		    return 1;  // Return 1 if it's prime
		 }
		 else{
		    return 0;  // Return 0 if it's not prime
		 }
	}
};


//{ Driver Code Starts.
int main()
{
	int t;
    cin>>t;
    while(t--){
	   int N;
	   cin>>N;
       Solution ob;
       cout << ob.digitPrime(N)<<"\n";
    
cout << "~" << "\n";
}
}
// } Driver Code Ends