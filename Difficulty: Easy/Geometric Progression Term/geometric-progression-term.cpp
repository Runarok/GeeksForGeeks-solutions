//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

void utility(int a, int r, int n) {
    // Calculate the value of r raised to the power of (n-1)
    int x = pow(r, n - 1);
    
    // Calculate the nth term of a geometric progression
    int ans = a * x;

    // Output the result
    cout << ans << endl;
}



//{ Driver Code Starts.
    
int main() {
	
	int t; cin>>t;
	while(t-- > 0) {
        int a, n;
        cin>>a>>n;
        int r = 2;
        utility(a, r, n);
    
cout << "~" << "\n";
}
	
}
// } Driver Code Ends