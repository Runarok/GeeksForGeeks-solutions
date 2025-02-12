//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends

// User function Template for C++

class Solution {
public:
    // Function to find the closest number to x that is a multiple of n
    int closestNo(int x, int n) {
        // If x is smaller than n, the closest multiple is n itself
        if (x < n) return n;
        
        // Find the next multiple of n greater than or equal to x
        int higherMultiple = x + (n - x % n);
        
        // Find the previous multiple of n less than or equal to x
        int lowerMultiple = higherMultiple - n;
        
        // Return the closest multiple to x
        // If both are equidistant, return the smaller multiple
        return (higherMultiple - x) > (x - lowerMultiple) ? lowerMultiple : higherMultiple;
    }
};


//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int x, n;
		cin >> x >> n;
		Solution ob;
		int ans = ob.closestNo(x, n);
		cout << ans <<"\n";
	
cout << "~" << "\n";
}  
	return 0;
}
// } Driver Code Ends